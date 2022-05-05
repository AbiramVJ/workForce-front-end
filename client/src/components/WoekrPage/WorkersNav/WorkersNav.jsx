import React from "react";
import SearchBar from "../../HomePage/SearchgBar";
import { MdLocationOn } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

function WorkersNav() {
  return (
    <div className="m-1 pa-1 w-full h-auto bg-white shadow-2xl flex justify-around">
      <div className="flex p-1 m-1 gap-2 text-center">
        <div className="">
          <MdLocationOn className="mt-1 w-8 h-8" />
        </div>
        <div class="flex justify-center">
          <div class="xl:w-96">
            <select
              class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-workforce-regal-blue focus:outline-none"
              aria-label="Default select example"
            >
              <option>All SriLanka</option>
              <option value="1">jaffna</option>
              <option value="2">Vavunija</option>
              <option value="3">Mullai Thivu</option>
              <option value="3">Mannar</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex p-1 m-1 gap-2 text-center">
        <div className="mt-1 w-8 h-8 gap-2">
          <BiCategoryAlt className="w-8 h-8 gap-2" />
        </div>
        <div>
          <div class="flex justify-center">
            <div class="xl:w-96">
              <select
                class="form-select appearance-none
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-workforce-regal-blue focus:outline-none"
                aria-label="Default select example"
              >
                <option>All SriLanka</option>
                <option value="1">Engineer</option>
                <option value="2">plumper</option>
                <option value="3">Carpenter Thivu</option>
                <option value="3">3Wheeler</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-1 m-1">
        <SearchBar />
      </div>
    </div>
  );
}

export default WorkersNav;
