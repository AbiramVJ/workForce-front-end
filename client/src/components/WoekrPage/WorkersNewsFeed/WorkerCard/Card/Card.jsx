import React from "react";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";

function Card(props) {
  console.log(props.fullName);
  return (
    <div className="w-3/4 shadow-lg h-auto p-1 m-1 flex rounded-md">
      <div className="p-1">
        <div className=" h-44 w-44 border-2 rounded-md">
          <img
            className="rounded-md"
            src="https://scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/278195420_4974034832684433_5458752837284941230_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uB24qrMLoh0AX8ZeOW1&_nc_ht=scontent.fcmb9-1.fna&oh=00_AT_orXBJecsUW7f4KLnYZourmQfMn-ZYm5DJTT2I4fO_kw&oe=6276A712"
            alt="profile"
          ></img>
      
        </div>
        
      </div>
      <div className="flex p-1 w-auto">
      ,
        <div className="p-2 "> 
       
          <div className="flex gap-24"><div className=" font-bold pl-1">V.Abiram</div><div className="text-center text-workforce-regal-blue  font-bold font-serif text-xl">
          Software Engineer
        </div></div>
          <div className="pl-1 font-serif text-gray-700 text-sm">
            software Engineer
          </div>
          
          <div className="pl-1 flex">
            <svg
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <div className="flex p-1 gap-5 w-auto">
            <div className=" text-sm p-1 flex gap-2">
              <AiOutlineMail className="flex justify-center mt-1" />
              abiram586@gmail.com
            </div>
            <div className=" text-sm p-1 w-auto flex gap-2">
              <GoLocation className="flex justify-center mt-1" />
              jaffna
            </div>
          </div>
          <div className=" text-sm p-1 flex gap-2">
            <AiOutlinePhone className="flex justify-center mt-1" />
            +94779507217
          </div>
          <div className=" text-sm p-1 flex gap-2 overflow-hidden">
            When Enterprises Migrate To The Cloud, They Still Have Workload
            Security Responsibility. SaaS And PaaS Models Each Require A
            Targeted Cloud Security Strategy To Protect Apps. SaaS
          </div>
          <div className="flex justify-center m-1">
            <button className=" bg-workforce-regal-blue font-serif text-white justify-center p-2 rounded-full text-sm hover:bg-blue-800 ">
              View Profile
            </button>
          </div>
         
        </div>
        
      </div>
    </div>
  );
}

export default Card;
