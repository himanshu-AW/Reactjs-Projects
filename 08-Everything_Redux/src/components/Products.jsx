import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProduct } from '../store/actions/ProductAction'

const Products = () => {
    const dispatch  = useDispatch();
    const {products} = useSelector(state=>state.ProductReducer);
 
    useEffect(()=>{
        dispatch(asyncGetProduct());
    },[])

  return (
    <div className="container mx-auto bg-zinc-700 rounded-md p-6 mt-5">
      <h1 className="text-2xl text-red-500 font-bold underline">Products</h1>
      <ul>
        {products && products.map((product,index) => (
          <li key={product.id} className="py-1 flex gap-10">
            <h1 className="text-white text-lg ">{product.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products