import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import UserDetail from '../components/UserDetail'
import ProductApi from '../components/ProductApi'
import Services from '../components/Services'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>} >
        {/* this is child route : if we want to display child route on same page */}
            {/* <Route path="/user/:name" element={<UserDetail/>} /> */}
        </Route>
        <Route path="/user/:name" element={<UserDetail />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<ProductApi/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  )
}

export default Routing;
