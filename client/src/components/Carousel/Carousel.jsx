import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className="p-4 m-2">
        <Slider {...settings}>
          <div className="">
            <div className="bg-white h-60 p-2 m-3">ReviewCard</div>
          </div>
          <div>
            <div className="bg-white h-60  m-3">ReviewCard</div>
          </div>
          <div>
            <div className="bg-white  h-60  m-3">ReviewCard</div>
          </div>
          <div>
            <div className="bg-white h-60  m-3">ReviewCard</div>
          </div>      
        </Slider>
      </div>
    );
  }
}


