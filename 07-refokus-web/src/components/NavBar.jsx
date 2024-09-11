import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[3px] border-zinc-600">
      <div className="nleft flex items-center">
        <img
          className="mr-12 h-7 "
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-1 h-7 bg-zinc-600"></span>
            ) : (
              <a key={index}
              className="text-md font-semibold" href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00ff19" }}
                    className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default NavBar;
