import React, { useState } from "react";

const Song = ({tooglePlayer, song }) => {
  console.log(song);

  const [playerFlag ,setPlayerFlag] = useState(false);
  const showPlayer = () =>{
    tooglePlayer(true,song);
  }

  return (
    <div className="d-flex gap-5 w-50 rounded p-3 fw-semibold bg-body-secondary ">
      <div className="item-center d-flex ">
        <img className="rounded border border-2 object-" src={song.artworkUrl100} alt="" />
      </div>
      
      <div className="p-2 rounded bg-info d-flex flex-column w-100">
        <h4 className="text-dark"> {song.artistName}</h4>
        <p className="text-secondary text-wrap">{song.trackName}</p>
        <button onClick={showPlayer} className='px-3 py-1 w-50 rounded fs-5 bg-primary text-white fw-semibold border-0' >Play Song</button>
      </div>

    </div>
  );
};

export default Song;
