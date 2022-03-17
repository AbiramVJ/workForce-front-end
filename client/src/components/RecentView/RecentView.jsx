import React from "react";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

function RecentView() {

  return (
    <div className="bg-workforce-regal-blue w-full p-2 h-96 mt-8 ">
      <div className="text-center text-white font-serif text-3xl p-1 ">
        See Recent jobber's Reviews
      </div>
      <div>
  
            <Carousel />
     
      </div>
    </div>
  );
}

export default RecentView;
