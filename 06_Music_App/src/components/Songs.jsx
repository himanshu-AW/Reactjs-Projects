import React from 'react'
import Song from './Song'

const Songs = ({tooglePlayer,allSongs}) => {
  return (
    <div className='d-flex flex-wrap gap-2 mt-5'>
        {allSongs.map((currentSong , index)=> <Song key={index} tooglePlayer={tooglePlayer}  song={currentSong} />)}
    </div>
  )
}

export default Songs
