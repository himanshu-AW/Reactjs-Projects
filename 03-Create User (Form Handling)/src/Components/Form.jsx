import React from 'react';
import { useForm } from 'react-hook-form';

function Form({handleFormSubmitData}){
    const {register,handleSubmit,reset}=useForm();

    const handleFormSubmit = (data) => {
        handleFormSubmitData(data);
        reset();
    }

    return (
        <div className='container shadow-lg shadow-gray-500 border-2 border-gray-300 rounded-md h-fit p-6 mb-5'>
            <form className='flex items-center justify-center gap-5' onSubmit={handleSubmit(handleFormSubmit)}>
                    <input {...register('name')} type='text' className='p-2 outline-blue-400 font-semibold rounded-md pl-4' placeholder='Name' />
                    <input {...register('email')} type='email' className='p-2 outline-blue-400 font-semibold rounded-md pl-4' placeholder='Email' />
                    <input {...register('position')} type='text' className='p-2 outline-blue-400 font-semibold rounded-md pl-4' placeholder='Position' />
                    <input {...register('image')} type='text' className='p-2 outline-blue-400 font-semibold rounded-md pl-4' placeholder='Image URL' />
                    <input type='submit' className='bg-blue-500 shadow-lg shadow-blue-400 border-2 border-blue-400 text-white py-2 px-5 rounded-md' value='Submit' />
            </form>
        </div>
    )
}

export default Form;