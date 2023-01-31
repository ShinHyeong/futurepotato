import { useSelector } from "react-redux";
import { useState } from "react";
import CommentForm from "./Comment/CommentForm";
import CommentList from "./Comment/CommentList";
import UserInfo from "./UserInfo";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DetailPage = () => {
    const {postList} = useSelector((state) => state.mainpage);
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dote:true,
        infinite:true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return(
        <div className = 'detail_window'>
                    <div className='wrapper-detail'>
                        <div className="left-col-detail">
                            <Slider {...settings} 
                            afterChange={(slide) => setCurrentSlide(slide)}
                            >
                                {postList[0].imageList.map((i) => (
                                    <img src={i.image} className="post-image" alt="" />
                                ))}
                            </Slider>   
                        </div>
                    <div className="right-col-detail">
                        <UserInfo />
                        <div className="comment-post">
                            <div style={{borderBottom:"1px solid lightgray;"}} className="post-story">
                                <p className="description"><span>{postList[0].name}</span> {postList[0].content}</p>
                                <p className="post-time">{postList[0].modifiedDate}</p>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default DetailPage;