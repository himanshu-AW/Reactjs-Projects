import React from "react";

function Card() {
  const cardData = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Headphone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex facere aspernatur porro doloribus voluptate, veniam est modi ipsa deleniti.",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1524656855800-59465ebcec69?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Iphone 16 pro",
      description:
        "Iphone 16 pro amet consectetur adipisicing elit. Saepe ex facere aspernatur porro doloribus voluptate, veniam est modi ipsa deleniti.",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1542598953-41310c43f54b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Laptop",
      description:
        "Consectetur adipisicing elit. Saepe ex facere aspernatur porro doloribus voluptate, veniam est modi ipsa deleniti.",
      instock: true,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1678282075115-de1836c1393d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F0ZXIlMjBqdWclMjBwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Water jug",
      description:
        "Water jug dolor sit amet consectetur adipisicing elit. Saepe ex facere aspernatur porro doloribus voluptate.",
          instock:true,
    },
  ];
  return (
    <div className="w-full h-screen flex justify-center items-center gap-10 bg-zinc-200">
      {cardData.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold text-xl">{elem.name}</h2>
            <p className="mt-5 text-xs">{elem.description}</p>
            <button
              className={`px-4 py-1 ${
                elem.instock ? "bg-sky-500" : "bg-red-500"
              } text-xs text-zinc-100 rounded mt-3`}
            >
              {elem.instock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
