import React, {useRef} from 'react';

function DemoUseRef(){
    const name = useRef(null);
    const age = useRef(null);
    const email = useRef(null);

    const handleSubmit =  (event) =>{
        event.preventDefault();
        console.log(name.current.value)
        console.log(age.current.value)
        console.log(email.current.value)
    }

    return (
        <div className='w-60 h-fit p-5 border-0 bg-teal-300 rounded m-auto'>
            <form action="" onSubmit={handleSubmit}>
                <input className='p-2 rounded-md m-2' ref={name} type="text" placeholder='name' />
                <input className='p-2 rounded-md m-2' ref={age} type="" placeholder='age' />
                <input className='p-2 rounded-md m-2' ref={email} type="email" placeholder='email' />
                <input className='px-3 py-1 rounded-full bg-red-500 text-white' type="Submit" />
            </form>
        </div>
    );
}

export default DemoUseRef;