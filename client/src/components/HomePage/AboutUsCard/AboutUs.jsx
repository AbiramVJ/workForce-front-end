import React from "react";

function AboutUs() {
  return (
    <div className="">
      <div className="w-4/2 h-auto flex rounded-lg lg:mt-9 justify-center shadow-2xl">
        <div className="p-1 m-2 w-60">
          <img src="man.png" alt="man" />
        </div>
        <div className="p-1 m-3 justify-center ">
          <div className="text-center p-2 text-white text-xl font-bold">
            
            About US
          </div>
          <div className=" text-red-900 font-serif font-semibold text-xl">Our corporate version is now available for companies</div>
          <div className=" text-blue-900 font-mono text-xl p-5">Hassle-free corporate portal for service management</div>
          <div className=" text-lg text-black">
            ..From service requests to fulfillment, digitally manage and monitor
            the progress.
          </div>
          <div className="p-2 justify-content-center"> 
            <button className=" bg-slate-300 p-3 border-2 rounded-3xl text-black hover:bg-red-900 hover:text-white">Contact US</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
