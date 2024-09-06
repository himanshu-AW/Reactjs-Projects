import { NavLink } from 'react-router-dom'

const Nav = () => {
    const isActiveLink = (e) =>{
        return {
            color:e.isActive ?"tomato":"",
        }
    }
  return (
    <div>
      <nav className='flex justify-center gap-10 py-4 bg-zinc-600 text-white font-semibold'>
        <NavLink style={isActiveLink} to="/">Home</NavLink>
        <NavLink style={isActiveLink} to="/about">About</NavLink>
        <NavLink style={isActiveLink} to="/products">Products</NavLink>
        <NavLink style={isActiveLink} to="/services">Services</NavLink>
        <NavLink style={isActiveLink} to="/user">User</NavLink>
      </nav>
    </div>
  )
}

export default Nav
