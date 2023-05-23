import React from 'react';
import Slider from "react-slick";

const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ ...style, right: "22px" }}
        onClick={onClick}
      />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ ...style, left: "10px", "zIndex": "9" }}
        onClick={onClick}
      />
    );
} 
        
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,    
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const RoomItem = (props) => { 
        
    let roomTypes = [];    
    props.roomTypes.map((roomtype) => {              
        roomTypes.push(
            <p key={roomtype.id}>
                <span className="room-capacity">
                    {roomtype.roomCapacity}<i className="fa fa-user"></i>                
                </span>
                {roomtype.name}
                <span>{roomtype.prices}</span>
            </p>            
        );
    }); 

    let images = [];    
    props.images.map((src, index) => {
        images.push(
            <a key={index} href="#">
                <img src={src} />
            </a>
        );
    });

    let stars = [];
    for(var i = 0; i < props.stars; i++) {
        stars.push(
            <i key={i} className="rating fa fa-star"></i>     
        );
    }             

    const roomItemStyle = props.mode === 'grid' ? {'flexDirection': 'column'} : {'flexDirection': 'row'};
        
    return (
        <div className="room-list__room-item" style={roomItemStyle}>
            <div className="room-image">
                <Slider {...settings}>                     
                    {images}
                </Slider>
            </div>               
            <div className="room-info">
                <h3>
                    <a href="#">{props.name}</a>  
                    {stars}                                        
                </h3>     
                <div>
                    <span>{props.address}<a href="#">{props.showMap}</a>{props.distance}</span>                        
                    <div className="review">
                        <div className="review-score-badge">{props.score}</div>                        
                        <div className="review-score-text">
                            <span className="review-comment">{props.reviewComment}</span>
                            <span className="review-count">{props.reviewCount}</span>
                        </div>
                    </div>
                    <div className="room-types">                                            
                    {roomTypes}           
                    </div>                        
                </div>               
            </div>         
        </div>                            
    )
} 

export default RoomItem;
