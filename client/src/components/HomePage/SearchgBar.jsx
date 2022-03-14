import React from "react";
import { BsSearch } from 'react-icons/bs';

function SearchBar() {
  return (
    <div className=" grid grid-cols-1 place-items-center h-10 ">
      <div className="flex justify-between gap-3">
        <div className=" justify-center">
          <form>
            <input
              className=" border-2 w-96 h-10 shadow-lg rounded-2xl text-center font-medium "
              type="text"
              name="search"
              placeholder="search your worker...!"
            />
          </form>
        </div>
        <div>
          <button className=" bg-white  text-center font-black w-20 h-10 rounded-2xl shover:bg-slate-200">
            <BsSearch className="h-10 w-10"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
