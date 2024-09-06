import React from "react";

function Card({user,id,handleRemoveUser}) {
  return (
    <div className="ml-4 mr-4 mb-8 w-52 h-fit bg-zinc-100 shadow-lg shadow-gray-400 border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center hover:-mt-3 duration-500 ease-in-out">
      <div className="image mt-2 w-24 h-24 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={user.image}
          alt=""
        />
      </div>
      <h2 className="font-semibold text-xl text-gray-700 mt-1 text-center">
        {user.name}
      </h2>
      <h3 className="text-sm opacity-75 font-semibold">{user.email}</h3>
      <h4 className="font-semibold text-md text-purple-500 text-center">
       {user.position}
      </h4>
      <button onClick={()=>handleRemoveUser(id)} className="bg-red-600 text-white px-4 py-1 rounded-md mt-2 -mb-4 shadow-lg shadow-red-500 border-2 border-red-500">
        Remove
      </button>
    </div>
  );
}

export default Card;
