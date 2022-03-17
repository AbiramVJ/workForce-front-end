import React from "react";
import { AiOutlineUnorderedList } from 'react-icons/ai';


function MobileNav(){
  return(
    <div className=" flex lg:hidden bg-workforce-regal-blue my-2 ml-2 mr-2 justify-between rounded-2xl">
      <div className=" items-center flex p-1">
        <div className="p-1 gap-1"><img src="logo.png" alt="logo" className=" w-10 h-10 gap-3 " /></div>
        <h4 className=" items-center gap-3 p-2 font-bold font-serif text-xl text-white ">
          workforce
        </h4>
      </div>

      <div className=" pt-3 mr-2">
        <button className=" hover:bg-white"><span className=" items-center"><AiOutlineUnorderedList/></span></button>
      </div>
    </div>
  )
}

function LgNav() {
  return (
    <div className="hidden sm:block p-2 shadow-lg-  bg-workforce-regal-blue  justify-between ... rounded-2xl my-2 mr-2 ml-2">
    <div className="flex justify-between">
      <div className="flex items-center">
        <img src="logo.png" alt="logo" className=" w-16 h-16 gap-3 " />
        <h2 className=" items-center gap-3 p-2 font-bold font-serif text-xl text-white ">
          workforce
        </h2>
        
      </div>
      <div className="flex items-center gap-3">
        <div>
        <button className=" inline-block px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-100 hover:shadow-lg hover:text-white focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:text-white focus:text-white active:shadow-lg transition duration-150 ease-in-out">
        SignIn
      </button>
        </div>
        <div>
        <button className=" inline-block px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-100 hover:shadow-lg hover:text-white focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:text-white focus:text-white active:shadow-lg transition duration-150 ease-in-out">
        SignUp
      </button>
        </div>
      </div>
      </div>
    </div>
  );
}

function Navbar(){
  return(
    <div>
      <MobileNav/>
      <LgNav/>
    </div>
  )
}

export default Navbar;
