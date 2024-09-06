import React from "react";

function MusicCard() {
  const data = [
    {
      name: "Mahiya ve",
      image:"https://timesofindia.indiatimes.com/photo/msid-66494879,imgsize-87239.cms",
      discription:
        "Mali ve ha ber er ber ber ber ber ber ber ber ber ber ber ber ber ber ber ber ber ber ber",
    },
    {
      name: "Tu aake Dek le",
      image:"https://i.ytimg.com/vi/PKT_OGVDe30/maxresdefault.jpg",
      discription: "Tu aake dek le ber ber ber ber ber ber ber ber ber ber",
    },
  ];

  const clickHander = () => {alert(`Song download ho rha ha!`)};

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col gap-4 justify-center items-center">
      {data.map((item, index) => (
        <div key={index} className="w-60 px-3 py-2 bg-zinc-100 rounded ">
          <h3 className="font-semibold text-xl"> {item.name}</h3>
          <img className="w-full h-28 mt-2 rounded-md object-fit" src={item.image} alt="" />
          <p className="mt-2 text-xs">
            {item.discription}
          </p>
          <button onClick={clickHander} className="px-2 py-1 bg-sky-400 text-xs font-semibold text-zinc-100 mt-3 rounded-md">
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default MusicCard;
