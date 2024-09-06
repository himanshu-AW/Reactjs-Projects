import React, { useState } from "react";
import Card from "./Components/Card";
import MusicCard from "./Components/MusicCard";
import UseStateConcept from "./Components/UseStateConcept";
import { ImageSlider } from "./Components/ImageSlider";
import { ProbsButtons } from "./Components/ProbsButtons";
import CardProbs from "./Components/CardProbs";
import DemoUseRef from "./Components/DemoUseRef";
import DemoControlledComp from "./Components/DemoControlledComp";
import DemoRHF from "./Components/DemoRHF";

function App() {
  const raw = [
    { name: "Rahul", profession: "Painter", image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", friend: false },
    { name: "Aman", profession: "Artist", image: "https://plus.unsplash.com/premium_photo-1707932484405-d8cac82c76c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D", friend: false },
    { name: "Mansih", profession: "Thalua", image: "https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnRyYWl0fGVufDB8fDB8fHww", friend: false },
    { name: "Sumit", profession: "Coder", image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHBvcnRyYWl0fGVufDB8fDB8fHww", friend: false },
  ];
  const [cardData,setCardData] = useState(raw);

  const handleClick = (cardIndex)=>{
    setCardData( (prevCardData)=>{
      return prevCardData.map((item,index)=>{
        if(index === cardIndex) return {...item, friend:!item.friend};
        return item;
      })
    });
  }

  return (
    <>
      <Card />
     <MusicCard />
    <UseStateConcept />
    <ImageSlider/>
      <ProbsButtons text="Like" color="bg-red-500"/>
    <ProbsButtons text="Know More" color="bg-green-500" />
    <ProbsButtons text="Download" color="bg-blue-500" />

      <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-4">
        { cardData.map((item, index)=>(
          <CardProbs key={index} cardIdx={index}  handleClick={handleClick}   values={item} />
        ))}
      </div>

      {/* form Handlling */}
      {/* 1st method => useRef */}
      <DemoUseRef />

      {/* 2nd method => Controlled Components */}
      <DemoControlledComp />

      {/* 3rd method => React Hooks Form */}
      <DemoRHF />

    </>
  );
}

export default App;
