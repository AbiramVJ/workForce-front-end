import React from "react";

function WorkerListCard(props) {
  console.log(props);
  return (
    <>
      <div className="p-1 flex text-center gap-3 shadow-xl rounded-xl h-15">
        <div className="p-2">
          <img src="work1.png" alt="category" className=" h-12" />
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
