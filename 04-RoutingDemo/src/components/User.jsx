import { Link, Outlet } from 'react-router-dom'
import { useContext} from 'react';
import { UserContext } from '../context/Context';


const Users = () => {
  const users = useContext(UserContext);
  // console.log(users)

  return (
    <>
    <div className='bg-zinc-200 w-1/2 h-fit rounded-md p-5 mt-5 m-auto'>
      <h1 className='text-lime-500 font-bold text-3xl'>User Component</h1>
      <p  className='mt-2 text-gray-600 font-semibold'>This is User page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolor voluptatum veritatis quam libero facilis quae totam neque suscipit magnam. Sapiente consectetur asperiores totam illum.</p>
      <h2 className='text-sky-500 text-2xl font-bold mt-3'>Select any User</h2>
      <ul className='flex flex-col mt-5 gap-2 text-gray-500 '>
        {users.length > 0 ? ( users.map(item =>{
          return (
            <Link to={`/user/${item.name.firstname+"-"+item.name.lastname}`} key={item.id} className='font-semibold text-xl capitalize w-fit hover:text-black'>
              {item.name.firstname+" "+item.name.lastname}
            </Link>
          )
        })) : <h1 className='text-xl font-bold text-gray-600'>Loading...</h1>}
      </ul>
    </div>

    {/* <br />
    <hr/> */}
    {/* through outlet we can display the links in same page */}
    {/* <Outlet/> */}
    </>
  )
}

export default Users
