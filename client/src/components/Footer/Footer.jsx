import React from "react";
import {
  AiOutlineHome,
  AiFillInfoCircle,
  AiOutlineContacts,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function MobFooter() {
  return (
    <div className=" lg:hidden grid grid-rows-1 grid-flow-col gap-2 shadow-xl fixed bottom-3 border-2 w-full">
      <div className="flex gap-1 p-1 justify-center">
        <button className=" p-1 ">
          <span className="flex gap-2 items-center">
            <AiOutlineHome /> Home
          </span>
        </button>
      </div>

      <div className="flex gap-1 p-1 justify-center">
        <button className=" p-1 ">
          <span className="flex gap-2 items-center">
            <FaUserCircle />
            Account
          </span>
        </button>
      </div>
      <div>
        <div className="flex gap-1 p-1 justify-center">
          <button className=" p-1 ">
            <span className="flex gap-2 items-center">
              <AiFillInfoCircle />
              Menus
            </span>
          </button>
        </div>
      </div>
      <div className="flex gap-1 p-1 justify-center">
        <button className=" p-1 ">
          <span className="flex gap-2 items-center">
            <AiOutlineContacts />
            Contact
          </span>
        </button>
      </div>
    </div>
  );
}

function LarFooter() {
  return (
    <div className="hidden sm:block bg-workforce-regal-blue m-2 mt-2 mr-2 p-1 rounded-t-lg w-full">
      <div className="flex justify-between p-1 m-2 h-20">
        <div className=" font-sans text-xl text-white">Download our App</div>
        <div className="flex flex-row-reverse h-40">
          <img src="playstore.png" alt="playStore" className=" h-2/5" />
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-row grid-cols-5 gap-4 p-1 m-2">
        <div className="flex gap-3 justify-items-center">
          <div>
            <img src="logo.png" alt="logo" className=" w-16 h-16 gap-3 " />
          </div>
          <div className=" text-center justify-center">
            <h2 className=" items-center gap-3 p-2 font-bold font-serif text-xl text-white text-center">
              workforce
            </h2>
          </div>
        </div>
        <div className=" justify-center text-left text-white p-1">
          <div className="">MENUS</div>
          <div className="">our workers</div>
          <div className="">see recent jobber</div>
          <div className="">Reviews</div>
          <div className="">How To Work</div>
        </div>
        <div className=" justify-center text-left text-white p-1">
          <div className="">MENUS</div>
          <div className="">login</div>
          <div className="">SignUp</div>
        </div>
        <div className=" justify-center text-left text-white p-1">
          <div>INFO</div>
          <div className="">Term and condition</div>
          <div className="">privacy and policy</div>
        </div>
        <div className=" justify-center text-left text-white p-1">
          <div> CONTACT</div>
          <div> info@workforce.com</div>
          <div> +94779507217</div>
          <div> +94776789956</div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <LarFooter />
      <MobFooter />
    </>
  );
}

export default Footer;
