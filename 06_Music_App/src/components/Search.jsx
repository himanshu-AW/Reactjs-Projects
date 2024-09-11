import React, { useRef } from 'react'
import SearchPage from '../pages/SearchPage';

const Search = ({getArtistName}) => {
    const artist = useRef();

  return (
    <>
        <label htmlFor="" className='fs-4 fw-semibold'>Artist Name</label>
        <input ref={artist} type='search' className='form-control mt-3 fw-semibold' placeholder='Search songs by artist name'/>
        <button onClick={()=>{artist.current.value === "" ? <SearchPage /> : getArtistName(artist.current.value)}} className='px-3 py-1 mt-3 rounded fs-5 bg-primary text-white fw-semibold border-0' >Search it</button>
    </>
    )
}

export default Search
