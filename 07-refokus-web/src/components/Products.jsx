import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

// importing videos
import arqitel from "../../public/videos/arqitel.webm";
import ttr from "../../public/videos/ttr.webm";
import yir from "../../public/videos/yir.webm";
import yahoo from "../../public/videos/yahoo.webm";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];

  const videos = [arqitel, ttr, yir, yahoo, arqitel];

  const [pos, setPos] = useState(0);
  const [isActiveVideo,setIsActiveVideo] = useState(false);
  const mover = (id,isActive) => {
    setPos(id * 20);
    setIsActiveVideo(isActive);
  };

  return (
    <div className="mt-32 relative">
      {products.map((product, index) => (
        <Product key={index} id={index} mover={mover} product={product} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
       {isActiveVideo && ( <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.75, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[28rem] rounded-md h-[20rem] left-[44%] overflow-hidden"
        >
          {videos.map((videoItem, index) => (
            <motion.div
            key={index}
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.75, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full overflow-hidden rounded-md " 
            >
                <video autoPlay muted loop>
                  <source src={videoItem} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              
            </motion.div>
          ))}
        </motion.div>)}
      </div>
    </div>
  );
};

export default Products;
