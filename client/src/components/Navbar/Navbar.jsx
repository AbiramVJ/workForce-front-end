import React from "react";
import { AiOutlineUnorderedList } from 'react-icons/ai';


function MobileNav(){
  return(
    <div className="flex lg:hidden bg-workforce-regal-blue my-2 ml-2 mr-2 justify-between rounded-2xl">
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
          <button className=" bg-white border-2 border-white text-center font-black w-20 h-10 rounded-2xl hover:bg-slate-200">
            SignIn
          </button>
        </div>
        <div>
          <button className=" bg-white border-2 border-white text-center font-black w-20 h-10 rounded-2xl hover:bg-slate-200">
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
