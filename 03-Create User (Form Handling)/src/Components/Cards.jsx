import React from "react";
import Card from "./Card";

function Cards({ users , handleRemoveUser }) {
  return (
    <div className="w-full flex flex-wrap gap-3 h-96 py-10 mt-12 items-center justify-center overflow-auto">
      {users.map((item, idx) => {
        return <Card handleRemoveUser={handleRemoveUser} id={idx} user={item} key={idx} />
      })}
    </div>
  );
}

export default Cards;
