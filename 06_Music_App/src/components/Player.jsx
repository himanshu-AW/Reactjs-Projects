const Player = ({tooglePlayer, songs }) => {
  return (
    <div >
        <div className="my-3">
            <button onClick={()=>{
              tooglePlayer(false, null)
            }} className='px-3 py-1 rounded fs-5 bg-success text-white fw-semibold border-0' >Back</button>
        </div>
      
      <div className="card col-lg-4 col-md-6 col-sm-8 bg-info bg-gradient d-flex justify-content-center align-items-center" >
      <div className="w-50 mt-2">
        <img className="rounded border w-100 border-2 cover" src={songs.artworkUrl100} alt="" />
      </div>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title text-wrap">{songs.artistName}</h5>
        <p className="card-text text-wrap">{songs.trackName}</p>
        <audio controls className="">
          <source src={songs?.previewUrl} type="audio/mp4" />
          Your browser does not support the audio elements.
        </audio>
      </div>
    </div>
      
    </div>
  );
};

export default Player;
