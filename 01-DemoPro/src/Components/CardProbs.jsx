
function CardProbs({values ,cardIdx , handleClick}){
    const {name,profession,image,friend}= values;
    return (
        <div className="w-52 bg-zinc-100 rounded-md overflow-hidden p-2">
            <div className='w-full h-40 bg-sky-200 rounded overflow-hidden'>
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className='w-full py-4'>
                <h1 className='font-semibold text-xl'>{name}</h1>
                <h2 className='text-xs'>{profession}</h2>
                <button onClick={()=> handleClick(cardIdx)} className={`mt-2 text-white ${friend ? "bg-green-500" : "bg-blue-500"} px-3 py-1 rounded-md`}>{friend? "Friend": "Add Friend"}</button>
            </div>
        </div>
    );
}

export default CardProbs;