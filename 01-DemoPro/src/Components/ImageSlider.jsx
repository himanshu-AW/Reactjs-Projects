import Reract , {useState} from 'react';
import { FaArrowRight } from "react-icons/fa";

export function ImageSlider(){
    const [curState,setCurState] = useState(false);
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col gap-10'>
            <h1 className='text-3xl font-bold text-blue-500 underline'>Image Slider</h1>
            <div className='relative w-60 h-36 rounded-md overflow-hidden flex'>
                <img className={`shrink-0 ${curState?"-translate-x-[100%]":"-translate-x-[0%]"} transition-transform duration-300 w-full object-cover rounded-md`}  src="https://plus.unsplash.com/premium_photo-1719862007265-34e67f3943b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img  className={`shrink-0 ${curState?"-translate-x-[100%]":"-translate-x-[0%]"} transition-transform duration-300 w-full object-cover rounded-md`} src="https://plus.unsplash.com/premium_photo-1718198502177-a9533e9c92d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D" alt="" />
                <span onClick={()=>setCurState(!curState)} className='absolute left-1/2 bottom-2 -translate-x-[50%] flex items-center justify-center w-10 h-10 bg-[#d4d4d4cc] rounded-full'>
                    <FaArrowRight />
                </span>
                
            </div>
        </div>
    );
}