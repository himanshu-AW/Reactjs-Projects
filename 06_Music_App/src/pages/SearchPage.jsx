import { useEffect, useState } from 'react';
import Search from '../components/Search'
import Songs from '../components/Songs'
import { getSongs } from '../services/api-client';
import Player from '../components/Player';

const SearchPage = () => {
    const [allSongs, setSongs] = useState([]);
    const [flag, setFlag] = useState(false);
    const [palyerSongs, setPlayerSongs] = useState(null) 
    const loadSongs = async () =>{
        setSongs( await getSongs("latest songs"));
    }
    useEffect(()=>{
        loadSongs()
    },[])

    const tooglePlayer = (flag, recievedSongs) =>{
        setPlayerSongs(recievedSongs)
        setFlag(flag)
    }

    const getArtistName = async (artistName) =>{
        console.log('Rec Artist Name',artistName);
        setSongs( await getSongs(artistName));
    }
  return (
    <div className='container'>
        <h1 className='alert alert-info text-center'>Music Store</h1>
       {flag ? <Player songs={palyerSongs} tooglePlayer={tooglePlayer} /> : <> <Search  getArtistName={getArtistName} />
       <Songs tooglePlayer={tooglePlayer} allSongs = {allSongs} /> </>}
  </div>
  )
}

export default SearchPage
