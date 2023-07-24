const Burger = () => {
    return (
        <div className="flex w-[80%] justify-center items-center gap-20 pb-10 border-solid border-b-[1px] border-black mt-10 flex-wrap">
            <img className='w-[60vh] h-[55vh] object-cover' src="https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg" alt="" width='500' />
        <div className='flex flex-col gap-5 w-[50vh] p-10 px-2'>
            <div className="flex gap-5 border-solid border-b-[1px] border-black">
                <div className="">
                    <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                    </div>
                <p className='font-bold text-lg'>80.50$</p>
            </div>
            <div className="flex gap-5 border-solid border-b-[1px] border-black">
                <div className="">
                    <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                    </div>
                <p className='font-bold text-lg'>80.50$</p>
            </div>
            <div className="flex gap-5">
                <div className="">
                    <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                    </div>
                <p className='font-bold text-lg'>80.50$</p>
            </div>
          
        </div>
        
    </div>
    )
}

export default Burger;