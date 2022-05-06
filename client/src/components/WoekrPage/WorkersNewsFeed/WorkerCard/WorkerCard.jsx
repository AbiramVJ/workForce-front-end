import React from "react";
import { useState } from "react";
import Card from "./Card/Card";

function WorkerCard() {
  const [worker, setWorker] = useState([
    {
      fullName: "Vijayakumar Abiram",
      email: "abiram5862gmail.com",
      addrress: "arasady lane pointpedro jaffna",
      phoneNumber: "0779507217",
      ProfileUrl: "",
      workCategory: "software engineer",
      age: "25",
    },
    {
      fullName: "Arasalingam Jude",
      email: "abiram5862gmail.com",
      addrress: "arasady lane pointpedro jaffna",
      phoneNumber: "0779507217",
      ProfileUrl: "",
      workCategory: "software engineer",
      age: "25",
    },
    {
      fullName: "Sathiyapirapa Harishanger",
      email: "abiram5862gmail.com",
      addrress: "arasady lane pointpedro jaffna",
      phoneNumber: "0779507217",
      ProfileUrl: "",
      workCategory: "software engineer",
      age: "25",
    },
  ]);
  return (
      <div className="m-1 p-1">
      {
        worker.map((data,index)=>(
          <Card {...data} key={index}/>
        ))
      }
       
      </div>
      );
}

export default WorkerCard;
