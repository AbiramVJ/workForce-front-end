import React from "react";

import { useState } from "react";
import Carousel from "./Carousel/Carousel";
import ReviewCard from "./ReviewCard/ReviewCard";
import Slider from "react-slick";


function RecentView() {
  const [review, setReview] = useState([
    {
    name: " Abiram Vj",
    rating: 5,
    reviewText:
      "Review text is an evaluation of a publication, such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, a play, musical theatre show or dance show.",
  },
  {
    name: " Abiram Vj",
    rating: 5,
    reviewText:
      "Review text is an evaluation of a publication, such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, a play, musical theatre show or dance show.",
  },
  {
    name: " Abiram Vj",
    rating: 5,
    reviewText:
      "Review text is an evaluation of a publication, such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, a play, musical theatre show or dance show.",
  },
  {
    name: " Abiram Vj",
    rating: 5,
    reviewText:
      "Review text is an evaluation of a publication, such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, a play, musical theatre show or dance show.",
  },
  {
    name: " Abiram Vj",
    rating: 5,
    reviewText:
      "Review text is an evaluation of a publication, such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, a play, musical theatre show or dance show.",
  },


]);
  return (
    <div className = "w-full p-2 h-96 mt-8 ">
      <div className=" bg-workforce-regal-blue text-center text-white font-serif text-3xl p-3 rounded-xl ">
        See Recent jobber's Reviews
      </div>
      <div className="gap-2 mt-10 grid grid-flow-col grid-row-1 overflow-auto ">
    {
      review.map((data,index)=>(
     <ReviewCard {...data} key={index}/>
      ))
    }
    </div>
      
    </div>
  );
}

export default RecentView;
