import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/Context';

const UserDetail = () => {
    const users = useContext(UserContext);
    console.log(users)

    let {name} = useParams();
    name = name.split('-').join(' ');

    const navigatev = useNavigate()

    const goBack = ()=>{
        // navigatev('/user')
        navigatev(-1)
    }

  return (
    <div className='flex p-10 w-full h-screen flex-wrap bg-zinc-200 justify-center items-center gap-10'>
        {users.length > 0 ? users.filter((item,index) => name === item.name.firstname+" "+item.name.lastname).map(item=>{
           return (
            <div key={item.id} className='userCard bg-zinc-100 rounded-lg p-3 flex flex-col justify-center items-center'>
                <div className='rounded-full overflow-hidden mt-2 h-24 w-24'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <h1 className='text-xl mt-3 font-semibold text-red-600 capitalize'>{name}</h1>
                <h2 className='text-md text-gray-500 font-semibold'>Email: {item.email}</h2>
                <h2 className='text-md text-blue-500 font-semibold'>Phone: {item.phone}</h2>
                <div className='text-md font-semibold text-center'>Address: <p> {item.address.city}, {item.address.street}, {item.address.zipcode}</p></div>
                <button onClick={goBack} className='rounded-lg text-xl px-3 py-2 bg-lime-400 text-white font-semibold mt-3'>Go Back!</button>
            </div>
    )
        }) : <h1 className='text-xl font-bold text-gray-600'>User data Loading...</h1>}
    </div>
  )
}

export default UserDetail
