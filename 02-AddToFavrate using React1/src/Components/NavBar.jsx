import React from "react";

export default function NavBar({ musicData }) {
  return (
    <div className=" w-full px-10 py-5 flex justify-between items-center">
      <h1 className="text-orange-500 font-semibold text-2xl underline">
        Orange
      </h1>
      <div className="flex gap-2 text-white px-4 py-2 bg-orange-500 rounded-full ">
        <h2>Favrate: </h2>
        <h3 className="px-2 font-bold rounded-full bg-red-600">
          {musicData.filter((item) => item.isAdded).length}
        </h3>
      </div>
    </div>
  );
}
