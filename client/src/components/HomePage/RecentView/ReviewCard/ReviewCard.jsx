import React from "react";
import Slider from "react-slick";


function ReviewCard(props) {


  return (
    <> 
    <div className=" h-56 w-96 bg-white p-3 mb-2 rounded-sm drop-shadow-xl  overflow-y-hidden cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90  ...">
      <div className="m-1 p-1 flex  ">
        <div className="flex gap-1 bg-white rounded-full border-2 border-black w-14 h-14 p-2 m-2 mt-2">
          <img
            src="https://eshendetesia.com/images/user-profile.png"
            alt="prof"
          />
        </div>
        <div className="p-1 m-1">
          <div className="font-serif justify-center">{props.name}</div>
          <div>Rating star</div>
        </div>
      </div>
      <div className="m-1 p-1 h-24 overflow-hidden">
       {props.reviewText}
      </div>
    </div>
  
    </>
  );
}

export default ReviewCard;
