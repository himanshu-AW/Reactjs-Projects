import React from "react";

export default function MusicCard({ data, index, handlerClickAddTOFav }) {
  const { songName, songImg, artist, isAdded } = data;

  return (
    <div className="w-68 gap-5 p-5 flex bg-white rounded-md">
      <div className="w-24 h-20 bg-orange-200 rounded overflow-hidden">
        <img className="w-full h-full object-cover" src={songImg} alt="" />
      </div>
      <div className="relative w-40">
        <h1 className="font-semibold text-xl whitespace-nowrap">{songName}</h1>
        <h2 className="text-sm font-semibold text-zinc-500">{artist}</h2>
        <button
          onClick={() => handlerClickAddTOFav(index)}
          className={`absolute left-1/2 bottom-2 -translate-x-[50%] translate-y-[50%] ${
            isAdded ? "bg-sky-500" : "bg-orange-500"
          } rounded-full px-3 py-1 whitespace-nowrap text-white`}
        >
          {isAdded ? "Added" : "Add To Favrate"}
        </button>
      </div>
    </div>
  );
}
