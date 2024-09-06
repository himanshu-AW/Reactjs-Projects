import React from 'react';
import {useForm} from 'react-hook-form';

function DemoRHF(){
    const {register , handleSubmit} = useForm();
    return (
        <div className='w-60 h-fit p-5 border-0 bg-teal-300 rounded m-auto'>
        <form action="" onSubmit={handleSubmit(data=> console.log(data))}>
            <input {...register("name")} className='p-2 rounded-md m-2' type="text" placeholder='name' />
            <input {...register("age")} className='p-2 rounded-md m-2' type="" placeholder='age' />
            <input {...register("eamil")} className='p-2 rounded-md m-2' type="email" placeholder='email' />
            <input className='px-3 py-1 rounded-full bg-red-500 text-white' type="Submit" />
        </form>
    </div>
    );
}

export default DemoRHF;