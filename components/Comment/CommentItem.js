const CommentItem = (commentItem) => {
    console.log(commentItem.commentItem);
    const comment = commentItem.commentItem;
    const isReply = true;
    return(
        <div className="comment_form">
            <div className='comment-info'>
                <div className='profile-content'>
                    <div className = 'pic-wrapper'>
                        <div className="profile-pic" style = {{width:30, height:30}}>
                            <img src = {comment.Image} alt/>
                        </div>
                    </div>
                    <div className="name-content-data">
                        <div className='name-content'>
                            <span style = {{fontWeight:'bold'}}>{comment.commentWriter}&nbsp;&nbsp;&nbsp;</span>
                            <span style = {{maxWidth:"100%", display:"inline-block",wordBreak:"break-all"}}>{comment.comment}</span>
                        </div>
                        <div className = 'date-heart-reply' style = {{fontSize:11, color:'gray'}}>
                            <span>좋아요 {comment.likeCount}개&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>답글 달기&nbsp;&nbsp;&nbsp;</span>
                            <span>● ● ●</span>
                        </div>
                    </div>
                </div>
                <div className='heart'>
                    <p>♡</p>
                </div>
            </div>
            {isReply ? <div style = {{fontSize:13, paddingLeft:50, color:'gray'}}>--- 답글 보기(2개)</div> : <></>}
        </div>
    );
}

export default CommentItem;