import React, {useState} from 'react';

function DemoControlledComp(){

    const [formData, setFormData] = useState({name:"",age:"",email:""});
 
    const handleSubmit =  (event) =>{
        event.preventDefault();
        console.log(formData)
    }

    return (
        <div className='w-60 h-fit p-5 border-0 bg-teal-300 rounded m-auto'>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={(event)=> setFormData({...formData, name:event.target.value})} className='p-2 rounded-md m-2' type="text" placeholder='name' />
                <input onChange={(event)=> setFormData({...formData, age:event.target.value})} className='p-2 rounded-md m-2' type="" placeholder='age' />
                <input onChange={(event)=> setFormData({...formData, email:event.target.value})} className='p-2 rounded-md m-2' type="email" placeholder='email' />
                <input className='px-3 py-1 rounded-full bg-red-500 text-white' type="Submit" />
            </form>
        </div>
    );
}

export default DemoControlledComp;