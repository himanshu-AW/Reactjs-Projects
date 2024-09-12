import React from 'react'
import Counter from './components/Counter'
import UserList from './components/UserList'
import Products from './components/Products'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white pt-1">
      <nav className='pt-5 flex justify-center gap-10 border-b-2 pb-4 border-zinc-700'>
        <Link to='/' >Home</Link>
        <Link  to='/users'>Users</Link>
        <Link to='/products'>Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Counter/>} />
        <Route path='/users' element={<UserList/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      
    </div> 
  )
}

export default App