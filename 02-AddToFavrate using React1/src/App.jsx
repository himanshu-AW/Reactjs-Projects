import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import MusicCard from "./Components/MusicCard";
import { GoMultiSelect } from "react-icons/go";

function App() {
  const musicData = [
    {
      songImg:
        "https://th.bing.com/th/id/OIP.KJ4YvqURvTaYDnNyCsWKWQHaF6?rs=1&pid=ImgDetMain",
      songName: "Blue Eyes",
      artist: "Yo Yo Honey Singh",
      isAdded: false,
    },
    {
      songImg: "https://i.ytimg.com/vi/A66TYFdz8YA/maxresdefault.jpg",
      songName: "Tu Aake Dekh Le",
      artist: "King",
      isAdded: false,
    },
    {
      songImg:
        "https://th.bing.com/th/id/OIP.R9Rl14z_j7Bqahn-8UTyLQHaHa?rs=1&pid=ImgDetMain",
      songName: "DJ wale Babu",
      artist: "Badshah",
      isAdded: false,
    },
    {
      songImg:
        "https://i.scdn.co/image/ab67616d0000b273ec2b46ad1becdfb057e97d95",
      songName: "Jannat",
      artist: "Devil Chang",
      isAdded: false,
    },
    {
      songImg: "https://i.ytimg.com/vi/cEuGWAhzCow/maxresdefault.jpg",
      songName: "Loser",
      artist: "Dino james",
      isAdded: false,
    },
    {
      songImg:
        "https://th.bing.com/th/id/OIP.eq9h1I7OmmBBb2HoC91nGQHaEK?rs=1&pid=ImgDetMain",
      songName: "Tera Yarr Hoon Mai",
      artist: "Arjeet Singh",
      isAdded: false,
    },
    {
      songImg:
        "https://th.bing.com/th/id/OIP.QcjTDfMGIbLC7iRt7rzwzQHaEK?rs=1&pid=ImgDetMain",
      songName: "Dil Tod Ke",
      artist: "B Praak",
      isAdded: false,
    },
  ];

  const [musicCardData, setMusicCardData] = useState(musicData);

  const handlerClickAddTOFav = (musicCardIdx) =>{
    setMusicCardData((prevMusicCardData)=>{
      return prevMusicCardData.map((data, index) => {
        if(index === musicCardIdx) return {...data, isAdded:!data.isAdded};
        return data;
      })
    })
  }

  return (
    <div className="m-5 rounded-md bg-zinc-200 w-full min-h-screen h-fit py-2">
      <NavBar musicData={musicCardData} />
      <hr />
      <div className="flex gap-8 flex-wrap m-10">
        {musicCardData.map((item, index) => (
          <MusicCard key={index} data={item} index={index} handlerClickAddTOFav={handlerClickAddTOFav} />
        ))}
      </div>
    </div>
  );
}

export default App;
