
const ProductCard = ({product}) => {
  return (
    <>
      <div className="image m-2 overflow-hidden rounded-md">
        <img className='w-full h-full object-contains' src={product.image} alt="" />
      </div>
      <h1 className="title mt-5 font-bold text-lg text-center">{product.title}</h1>
      <h2 className="caegory m-2 text-sm text-zinc-500 capitalize font-semibold">{product.category}</h2>  
    <h2 className='price m-2 text-lg capitalize font-semibold '>Price: <span className='line-through'>${product.price+500}</span> ${product.price+500}</h2>
    <div className="rating m-2 font-semibold">
            <h3>Rate: {product.rating.rate} &#11088;</h3>
            <h3>Available product: <span className='text-blue-600'>{product.rating.count}</span></h3>
        </div>
        <div className="btnWrapper text-center m-3">
        <button className='bg-yellow-400 text-xl text-zinc-700 hover:bg-yellow-500 hover:text-black font-bold p-3 rounded-lg'>Add to Cart</button>
        </div>
    </>
  )
}

export default ProductCard
