import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Card = ({ width, btn }) => {
  return (
    <div className={`${width} hover:bg-violet-600 hover:p-6 duration-300 bg-zinc-700 p-5 rounded-xl min-h-[26rem] flex flex-col justify-between `}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Up Next: Culture</h3>
          <IoIosReturnRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">Who we are</h1>
      </div>
      <div className="w-full">
        {btn === true ? (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full px-5 py-2 mt-5 border-2 border-zinc-50 flex items-center gap-4">
              <span>Contact Us</span>
              <IoIosReturnRight />
            </button>
          </>
        ) : (
          <p className="text-sm text-zinc-300 font-medium mt-5">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
