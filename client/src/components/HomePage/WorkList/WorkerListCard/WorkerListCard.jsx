import React from "react";

function WorkerListCard(props) {
  console.log(props);
  return (
    <>
      <div className="p-1 flex flex-wrap text-center gap-3 shadow-xl rounded-xl h-15 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-90 hover:bg-workforce-regal-blue duration-300 ... hover:text-white hover:cursor-pointer ">
        <div className="p-2  text-center">
          <img src={props.url} alt="category" className=" h-12" />
        </div>
        <div className="p-2 text-center justify-center font-serif text-lg">
          {" "}
          {props.name}
        </div>
        
      </div>
      
    </>
  );
}

export default WorkerListCard;
