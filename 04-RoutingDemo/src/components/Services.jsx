import { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("This is Normal Data");
  const [second, setSecond] = useState("This is large Data.");

  useEffect(() => {
    console.log("services component is created.");
    return () => {
      console.log("Service coponent is deleted.");
    };
  },[]);

  return (
    <div>




      <h1 className="text-2xl font-bold m-3">{first}</h1>
      <button onClick={()=>setFirst("Normal data has been Changed.")} className="bg-black hover:bg-sky-500 text-white m-2 font-semibold rounded-full p-3">
        Change Data
      </button>

      <h1 className="text-2xl font-bold m-3">{second}</h1>
      <button onClick={()=>setSecond("Large data has been Changed.")} className="bg-sky-500 hover:bg-black text-white m-2 font-semibold rounded-full p-3">
        Change Data
      </button>

    </div>
  );
};

export default Services;
