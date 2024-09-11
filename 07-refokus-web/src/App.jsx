import React from 'react'
import NavBar from './components/NavBar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-screen select-none h-full bg-zinc-900 font-sans text-white'>
     <NavBar />
     <Work/>
     <Stripes/>
     <Products/>
     <Marquees/>
     <Cards/>
     <Footer/>
    </div>
  )
}

export default App