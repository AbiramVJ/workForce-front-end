import React from "react";

function HowWorks() {
  return (
    <div className="m-2 p-1">
      <div className="text-center font-serif text-2xl font-bold subpixel-antialiased">
        How it Works..?
      </div>
      <div className="mt-5 p-1 justify-center ml-96">
       
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8FAUEv_E_xQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="aspect-[4/1] items-center"
        ></iframe>
      </div>
    </div>
  );
}

export default HowWorks;
