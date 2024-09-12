import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrements,
  decrementsByFive,
  increment,
  incrementByFive,
  incrementByFiveAsync,
} from "../store/reducers/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 mx-auto bg-red-500 py-4 rounded-md text-center">
      <h1 className="text-2xl font-bold text-black ">Count:{count}</h1>
      <div className="p-5 m-5 flex gap-10 justify-center">
        <button
          onClick={() => dispatch(increment())}
          className="border-2 border-lime-500 px-3 py-1 font-semibold rounded-md text-lime-500 hover:bg-lime-500 hover:text-white hover:border-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrements())}
          className="border-2 border-blue-500 px-3 py-1 font-semibold rounded-md text-blue-500 hover:bg-blue-500 hover:text-white hover:border-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByFive(5))}
          className="border-2 border-black px-3 py-1 font-semibold rounded-md text-black hover:bg-black hover:text-white hover:border-white"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(decrementsByFive(5))}
          className="border-2 border-purple-500 px-3 py-1 font-semibold rounded-md text-purple-500 hover:bg-purple-500 hover:text-white hover:border-white"
        >
          Decrement by 5
        </button>
        <button
          onClick={() => dispatch(incrementByFiveAsync(5))}
          className="border-2 border-yellow-500 px-3 py-1 font-semibold rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-white"
        >
          DIncrement by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
