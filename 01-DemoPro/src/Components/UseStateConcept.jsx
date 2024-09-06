import React, { useState } from "react";

function UseStateConcept() {
  const [score, setScore] = useState(0);
  const [val, setVal] = useState({ name: "Aman", isBanned: false });
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [arr1, setArr1] = useState([1, 2, 3, 4]);
  const [arr2, setArr2] = useState([1, 2, 3, 4, 5]);
  const [arr3, setArr3] = useState([1, 2,3,4]);
  const [arrOfObj, setArrOfObj] = useState([{name:"Aman",age:20},{name:"Harsh",age:21},{name:"Shivam",age:22}]);

  return (
    <div className="flex flex-wrap">

      <div className=" p-4 w-fit h-fit m-4 border-4 bg-orange-500 rounded-xl">
        <h1 className="bg-zinc-100 w-fit p-2 rounded">Score: {score}</h1>
        <button
          onClick={() => setScore((prevScore) => prevScore + 10)}
          className=" mt-3 px-3 py-1 rounded-full bg-sky-500 text-white"
        >
          Change Score
        </button>
      </div>

      <div className=" p-4 w-fit h-fit m-4 border-4 bg-yellow-400 rounded-xl">
        <div className="bg-zinc-100 w-fit p-2 rounded">
          <h1>Name: {val.name}</h1>
          <h2> Banned: {val.isBanned.toString()}</h2>
        </div>
        <button
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
          className={`mt-3 px-3 py-1 rounded-full ${
            val.isBanned ? "bg-sky-500" : "bg-orange-600"
          } text-white`}
        >
          Change
        </button>
      </div>

      <div className=" p-4 w-fit h-fit m-4 border-4 bg-purple-400 rounded-xl">
        <h2>Remove elem from last one-by-one</h2>
        {arr.map((elem,index) => (
          <h1 key={index} className="m-1 bg-zinc-100 w-fit p-2 rounded">{elem}</h1>
        ))}
        <button
          onClick={() =>
            setArr(() => arr.filter((index) => index != arr.length))
          }
          className=" mt-3 px-3 py-1 rounded-full bg-red-500 text-white"
        >
          Remove
        </button>
      </div>

      <div className=" p-4 w-fit h-fit m-4 border-4 bg-green-400 rounded-xl">
        <h2>Remove Specific elem like: 3</h2>
        {arr1.map((elem,index) => (
          <h1 key={index} className="m-1 bg-zinc-100 w-fit p-2 rounded">{elem}</h1>
        ))}
        <button
          onClick={() => setArr1(() => arr1.filter((item) => item != 2))}
          className=" mt-3 px-3 py-1 rounded-full bg-red-500 text-white"
        >
          Remove
        </button>
      </div>

      <div className=" p-4 w-fit h-fit m-4 border-4 bg-blue-400 rounded-xl">
        <h2>Remove elem divisiple by 2</h2>
        {arr2.map((elem, index) => (
          <h1 key={index} className="m-1 bg-zinc-100 w-fit p-2 rounded">{elem}</h1>
        ))}
        <button
          onClick={() => setArr2(() => arr1.filter((item) => item % 2 !== 0 ))}
          className=" mt-3 px-3 py-1 rounded-full bg-red-500 text-white"
        >
          Remove
        </button>
      </div>

      <div className=" p-4 w-fit h-fit m-4 border-4 bg-gray-400 rounded-xl">
        <h2>Add an elem at the end</h2>
        {arr3.map((elem, index) => (
          <h1 key={index} className="m-1 bg-zinc-100 w-fit p-2 rounded">{elem}</h1>
        ))}
        <button
          onClick={() => setArr3([...arr3, arr3[arr3.length-1]+1])}
          className=" mt-3 px-3 py-1 rounded-full bg-blue-500 text-white"
        >
          Add
        </button>
      </div>

      <div className=" p-4 w-fit h-fit m-4 border-4 bg-red-400 rounded-xl">
        <h2>Change the age of harsh.</h2>
        {arrOfObj.map((obj,index) => (
                <div key={index} className="m-1 bg-zinc-100 w-fit p-2 rounded">
                    <h2>Name: {obj.name}</h2>
                    <h2>Age: {obj.age}</h2>
                </div>
        ))}
        <button
          onClick={() => setArrOfObj(arrOfObj.map(obj =>(obj.name == "Harsh"? {name:obj.name ,age:obj.age+1}: obj)))}
          className=" mt-3 px-3 py-1 rounded-full bg-sky-500 text-white"
        >
          Change
        </button>
      </div>

    </div>
  );
}

export default UseStateConcept;
