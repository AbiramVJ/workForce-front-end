import React from "react";
import { useState } from "react";
import Card from "./Card/Card";

function WorkerCard() {
  const [worker, setWorker] = useState([
    {
      fullName: "Vijayakumar Abiram",
      email: "abiram586@gmail.com",
      addrress: "arasady lane pointpedro jaffna",
      phoneNumber: "0779507217",
      ProfileUrl: "https://scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/278195420_4974034832684433_5458752837284941230_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=NL6CeF74Ne0AX_aughr&_nc_ht=scontent.fcmb9-1.fna&oh=00_AT_RHOLlRqTd6nUK_lS-PNAKm-5KF71PndG4MQjXA1RAPA&oe=627E9012",
      workCategory: "software engineer",
      age: "25",
    },
    {
      fullName: "Arasalingam Jude",
      email: "arasalingam5862@gmail.com",
      addrress: "arasady lane pointpedro jaffna",
      phoneNumber: "0779555217",
      ProfileUrl: "https://scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-1/278962322_1371614669949152_538450532983297238_n.jpg?stp=dst-jpg_s320x320&_nc_cat=111&ccb=1-6&_nc_sid=7206a8&_nc_ohc=obiNZsviPlUAX_mJDSv&tn=zjcju3v1V41krpVR&_nc_ht=scontent.fcmb9-1.fna&oh=00_AT_Q9hz5Jb-LCrRT2T7-XMMDbghuvmc4_h6CWY-vC5hJcA&oe=627EB870",
      workCategory: "plumper",
      age: "25",
    },
    {
      fullName: "Sathiyapirapa Harishanger",
      email: "hari45@gmail.com",
      addrress: "arasady lane pointpedro jaffna",
      phoneNumber: "0779555217",
      ProfileUrl: "https://scontent.fcmb9-1.fna.fbcdn.net/v/t1.6435-1/49301909_624699571296481_6303823388393603072_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=104&ccb=1-6&_nc_sid=7206a8&_nc_ohc=_PecaCAVbRgAX9bGq47&_nc_ht=scontent.fcmb9-1.fna&oh=00_AT-lFZwXPntpnaTEKQVGkTInQRqBp-6RG0mWhZ39BA-INw&oe=629EE9BC",
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
