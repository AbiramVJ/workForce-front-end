import React from "react";
import { useState } from "react";
import WorkerListCard from "./WorkerListCard/WorkerListCard";
import { BiCategoryAlt } from "react-icons/fa";

function WorkList() {
  const workerCategory = [
    {
      name: "Engineer",
      url:"engineer.png"
    },
    {
      name: "Home Cleaner",
      url:"cleaner.png"
    },
    {
      name: "plumper",
      url:"plumper.png"
    },
    {
      name: "Bike Mechanic",
      url:"BikeMechanic.png"
    },
    {
      name: "3 Wheeler",
      url:"3wheelar.png"
    },
    {
      name: "Electrician",
      url:"electrician.png"
    },
    {
      name: "Video Editor",
      url:"VideoEditer.png"
    },
    {
      name: "Carpenters",
      url:"Carpenter.png"
    },
    {
      name: "3 Wheeler",
      url:"3wheelar.png"
    },
    {
      name: "Electrician",
      url:"electrician.png"
    },
    {
      name: "Video Editor",
      url:"VideoEditer.png"
    },
    {
      name: "Carpenters",
      url:"Carpenter.png"
    },
    {
      name:"Other......",
      url:"https://cdn-icons-png.flaticon.com/512/4743/4743041.png"
    }
    
  ];
  return (
    <div className=" m-1 p-1">
      <div className="text-xl font-serif">Our Workers ...</div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-4 sm:grid-cols-2 ">
        {workerCategory.map((data, index) => (
          <WorkerListCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default WorkList;
