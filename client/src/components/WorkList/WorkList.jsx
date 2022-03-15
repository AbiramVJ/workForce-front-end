import React from "react";
import { useState } from "react";
import WorkerListCard from "./WorkerListCard/WorkerListCard";

function WorkList() {
  const workerCategory = [
    {
      name: "Engineer",
    },
    {
      name: "Home Cleaner",
    },
    {
      name: "plumper",
    },
    {
      name: "Bike Mechanic",
    },
    {
      name: "3 Wheeler",
    },
    {
      name: "Electrician",
    },
    {
      name: "Video Editor",
    },
    {
      name: "Carpenters",
    },
    {
      name: "Bike Mechanic",
    },
    {
      name: "3 Wheeler",
    },
    {
      name: "Electrician",
    },
    {
      name: "Video Editor",
    },
    {
      name: "Carpenters",
    },
  ];
  return (
    <div className=" m-1 p-1">
      <div className="text-xl font-serif">Our Workers ...</div>
      <div className="grid grid-flow-row grid-cols-5 gap-4">
        {workerCategory.map((data, index) => (
          <WorkerListCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default WorkList;
