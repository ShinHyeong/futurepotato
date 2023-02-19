package s3.feed.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import s3.feed.dto.PostDto;
import s3.feed.entity.*;
import s3.feed.exception.ForbiddenException;
import s3.feed.repository.MediaRepository;
import s3.feed.repository.PostRepository;
import s3.feed.repository.UserRepository;

import java.io.IOException;
import java.io.InputStream;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    private final MediaRepository mediaRepository;
    private final UserRepository userRepository;
    private final AmazonS3Client amazonS3Client;
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;

    public ResponseEntity uploadFile(List<MultipartFile> multipartFile, String content, String accountId) {
        UserEntity userEntity = userRepository.findByAccountId(accountId);
        PostEntity post = new PostEntity(content);
        boolean isMultyImage = post.isMultyImage();
        multipartFile.forEach(file -> {

            String fileName = createUuidFileName(file.getOriginalFilename());

            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentLength(file.getSize());
            objectMetadata.setContentType(file.getContentType());

            try (InputStream inputStream = file.getInputStream()) {
                amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패했습니다.");
            }
            String storedImageUrl = "https://sgfp.s3.ap-northeast-2.amazonaws.com/"+fileName;
            MediaEntity mediaEntity = new MediaEntity(storedImageUrl);
            System.out.println("imageUrl: "+ storedImageUrl);
            post.getMediaEntityList().add(mediaEntity);

        });
        if (post.getMediaEntityList().size() >= 2)
            isMultyImage = true;
        post.addPost(post.getMediaEntityList(), userEntity.getAccountId(), userEntity.getProfileImage(), LocalDateTime.now(), null, 0, 0, isMultyImage);
        post.addUser(userEntity);
        Long postId = postRepository.save(post).getId();
        userEntity.getPosts().add(post);
        userRepository.save(userEntity);
        return ResponseEntity.ok("postId: "+postId+ " ,게시물 등록");
    }

    public PostDto.ResImageListDto getImageList(Long postId) {
        PostDto.ResImageListDto resImageListDto = new PostDto.ResImageListDto();
        PostEntity postEntity = postRepository.findById(postId).get();
        UserEntity userEntity = postEntity.getUserEntity();
        List<MediaEntity> mediaEntityList = postEntity.getMediaEntityList();
        for (MediaEntity mediaEntity : mediaEntityList) {
            String storedImageUrl = mediaEntity.getImage();
//          String storedImageUrl = amazonS3Client.getUrl(bucket, mediaEntity.getImage()).toString();
            resImageListDto.getImageList().add(storedImageUrl);
        }
        List<CommentEntity> commentEntityList = postEntity.getCommentEntityList();
        for (CommentEntity commentEntity : commentEntityList) {
            List<ReplyEntity> replyEntityList = commentEntity.getReplyEntityList();
            int replyCount = replyEntityList.size();
            PostDto.ReqCommentListDto reqCommentListDto = new PostDto.ReqCommentListDto();
            for (ReplyEntity replyEntity : replyEntityList) {
                reqCommentListDto.replyList.add(
                        new PostDto.ReqReplyDto(replyEntity.getId(),
                            replyEntity.getUserEntity().getAccountId(),
                            replyEntity.getReply(), replyEntity.getLikeCount(),
                            replyEntity.getCreatedDt(),
                            replyEntity.getUserEntity().getProfileImage())
                );
            }
            resImageListDto.commentList.add(
                    new PostDto.ReqCommentListDto(
                            commentEntity.getUserEntity().getAccountId(),
                            commentEntity.getUserEntity().getProfileImage(),
                            commentEntity.getComment(),
                            commentEntity.getId(),
                            commentEntity.getLikeCount(),
                            commentEntity.getCreatedDt(),
                            replyCount,
                            reqCommentListDto.replyList
                    )
            );
        }
        return new PostDto.ResImageListDto(postEntity.getId(),
                postEntity.getContent(),
                userEntity.getAccountId(),
                userEntity.getProfileImage(),
                postEntity.getCreatedDt(),
                postEntity.getModifiedDt()
                , postEntity.getLikeCount(), postEntity.getCommentEntityList().size(), postEntity.isMultyImage(), resImageListDto.getImageList(), resImageListDto.commentList);
    }

    public ResponseEntity deletePost(Long postId, String accountId) {

        PostEntity postEntity = postRepository.findById(postId).get();
        String postWriter = postEntity.getUserEntity().getAccountId();

        if (postWriter.equals(accountId)) {
            List<MediaEntity> mediaEntityList = postEntity.getMediaEntityList();
            postRepository.deleteById(postId);
            for (MediaEntity media : mediaEntityList) {
                mediaRepository.deleteById(media.getId());
                amazonS3.deleteObject(new DeleteObjectRequest(bucket, media.getImage()));
            }
        } else {
            throw new ForbiddenException("권한이 없습니다.");
        }
        return ResponseEntity.ok("게시물 삭제 성공");
    }


    public ResponseEntity updatePost(Long postId, String accountId, String content) {

        PostEntity postEntity = postRepository.findById(postId).get();
        String postWriter = postEntity.getAccountId();
        if (!postWriter.equals(accountId)) {
            throw new ForbiddenException("권한이 없습니다.");
        }
        postEntity.updatePost(content, LocalDateTime.now());
        postRepository.save(postEntity);
        return ResponseEntity.ok("postId:"+postId + " 게시물 수정 성공");
    }

    public String createUuidFileName(String fileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
    }

    public String getFileExtension(String fileName) {
        return fileName.substring(fileName.lastIndexOf("."));
    }

    public void deleteFile(String fileName) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));
    }

    public ResponseEntity likePost(Long postId, String accountId) {
            PostEntity postEntity = postRepository.findById(postId).get();
            UserEntity userWhoLikeThis = userRepository.findByAccountId(accountId);
            postEntity.setLikeCount(postEntity.getLikeCount() + 1);
            postEntity.getUsersWhoLikeThis().add(userWhoLikeThis);
            postRepository.save(postEntity);
            return ResponseEntity.ok("게시물 좋아요 성공");
    }
    public ResponseEntity deleteLikePost(Long postId, String accountId) {
            PostEntity postEntity = postRepository.findById(postId).get();
            postRepository.deleteLike(accountId, postId);
            postEntity.setLikeCount(postEntity.getLikeCount()-1);
            return ResponseEntity.ok("게시물 좋아요 취소 성공");
    }

    public boolean isLikePost(Long postId, String accountId) {
        return postRepository.isLike(accountId, postId);
    }
}
//    public UserDto.ResPostListDto getUserPosts(String name){
//        UserEntity userEntity = userRepository.findByName(name);
//        UserDto.ResPostListDto resPostListDto = new UserDto.ResPostListDto(userEntity.getName(), userEntity.getPosts());
//        return resPostListDto;
//
//    }