const Home = () => {
  return (
    <div className='bg-zinc-200 w-1/2 h-fit rounded-md p-5 mt-5 m-auto'>
      <h1 className='text-sky-500 font-bold text-3xl'>Home</h1>
      <div className='mt-4 rounded-md overflow-hidden'>
        <img src="https://images.unsplash.com/photo-1721146378270-1b93839f7ae7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <p  className='mt-4 text-gray-600 font-semibold'>This is Home page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolor voluptatum veritatis quam libero facilis quae totam neque suscipit magnam. Sapiente consectetur asperiores totam illum.</p>
      <button className='rounded-lg p-3 bg-blue-500 text-white font-semibold mt-3'>Click Me!</button>
    </div>
  )
}

export default Home;
