import React from "react";
import WorkerCard from "./WorkerCard/WorkerCard";

function WorkerNewsFeed() {
  return (
    <div className=" p-1 flex">
      <div className="w-1/4 border-2 gap-2 p-2">
        <div className="p-1 h-96 overflow-y-scroll ">
          <div className=" font-serif text-lg ">location</div>
          <div className=" font-serif text-sm ml-3 m-2 p-3 gap-2">
            <div className=" p-2 m-1 border-2 cursor-pointer hover:bg-workforce-regal-blue hover:text-white rounded-md hover:scale-110 ">
              Colombo
            </div>
            <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Gampaha
            </div>
            <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Kalutara
            </div>
            <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Kandy
            </div>
            <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Matale
            </div>
            <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Nuwara Eliya
            </div>
            <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Galle
          </div>
          <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
          Matara
        </div>
        <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
        Hambantota
        </div>
        <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
        Jaffna
        </div>
          </div>
        </div>
        <div className="p-1 overflow-y-scroll h-96">
        <div className=" font-serif text-lg">location</div>
        <div className=" font-serif text-sm ml-3 m-2 p-3 gap-2">
          <div className=" p-2 m-1 border-2 cursor-pointer hover:bg-workforce-regal-blue hover:text-white rounded-md hover:scale-110 ">
            Software Engineer
          </div>
          <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            plumper
          </div>
          <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Home Cleaner
          </div>
          <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            3Wheeler
          </div>
          <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Electrician
          </div>
          <div className=" p-2 m-1 border-2 cursor-pointer hover:scale-110  hover:bg-workforce-regal-blue hover:text-white rounded-md ">
            Mechanic
          </div>
        </div>
      </div>
      </div>
      <div className=" p-2 border-2 w-full"><WorkerCard/></div>
    </div>
  );
}

export default WorkerNewsFeed;

