

const Reservation = () => {
    return (
        <>
            <div className="w-full p-10 flex flex-col items-center mt-[7vh]">

                <h1 className='w-full text-center text-2xl sm:text-4xl font-extralight font-quote'>RESERVATION</h1>
                <div className="w-full h-full p-8 md:p-14 flex justify-center flex-wrap gap-10">
                    <from className='flex flex-col items-center w-[60vh]'>
                        <div className='w-full h-full flex flex-wrap gap-3 '>
                            <div className="w-full flex flex-col">
                                <label className="w-full font-bold" htmlFor="">Name</label>
                                <input className="bg-transparent w-full outline-none h-14 border-b border-b-black mb-5" type="text" placeholder="Name Surname" />
                            </div>
                            <div className="w-full flex flex-col ">
                                <label className="font-bold" htmlFor="">Number of Guests</label>
                                <input className="w-full bg-transparent outline-none h-14 border-b border-b-black mb-5" type="number" placeholder="Name Surname" />
                            </div>
                            <div className="w-full flex flex-col ">
                                <label className="font-bold" htmlFor="">Date</label>
                                <input className="w-full bg-transparent outline-none h-14 border-b border-b-black mb-5" type="Date" placeholder="Name Surname" />
                            </div>
                            <div className="w-full flex flex-col ">
                                <label className="font-bold" htmlFor="">Time</label>
                                <input className="w-full bg-transparent outline-none h-14 border-b border-b-black mb-5" type="time" placeholder="Name Surname" />
                            </div>
                        </div>
                        <button type="submit" className="w-[80%] hover:w-[90%] bg-black text-white  h-14 mt-5 duration-500 hover:shadow-black hover:text-white ">SUBMIT RESERVATION</button>
                    </from>
                    <img className="w-[60vh] h-[30vh] md:h-[55vh] object-cover rounded-xl" src="https://www.mashed.com/img/gallery/reddit-cant-believe-this-ridiculous-restaurant-reservation-story/l-intro-1632925093.jpg" alt="" />
                </div>
                

                <div className='line'></div>

            </div>
        </>
    )
}

export default Reservation