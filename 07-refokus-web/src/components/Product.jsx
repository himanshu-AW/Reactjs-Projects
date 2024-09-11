import React from "react";
import Button from "./Button";
const Product = ({ product ,id,mover}) => {
  return (
    <div className="w-full h-[20rem] py-20 text-white hover:bg-zinc-800">
      <div   onMouseEnter={(e)=>mover(id,e.bubbles)}
      className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">{product.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{product.description}</p>
          <div className="flex items-center gap-6">
            {product.live && <Button />}
            {product.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
