
const Menu = ({ statu, childClick }) => {
    const click = () => {
        childClick();
    }
    console.log('menu :' , statu)

    return (
        <>
            {statu ? (<><div className='fixed top-0 left-0 bg-black opacity-40 w-full h-[100vh] z-10 duration-500' onClick={click}></div>
                <div className="fixed top-0 left-0 bg-white z-10 p-5 w-full h-[100vh] duration-500 sm:w-[500px]">
                    <div className='flex justify-between px-5 items-center mb-10 h-12'>
                        <h1 className='text-center text-2xl font-semibold tracking-wider text-black ' >LOGO</h1>
                        <p onClick={click} className=' text-white bg-orange-500 p-1 px-3 rounded-md cursor-pointer' >Close</p>
                    </div>

                    <div className='flex flex-col'>

                        <a href='' className="flex justify-center items-center  p-3 font-semibold border-solid hover:bg-slate-100 h-20">
                            <h1>Home</h1>
                        </a>
                        <a href='' className="flex justify-center items-center  p-3 font-semibold border-solid hover:bg-slate-100 h-20">
                            <h1>Menu</h1>
                        </a>
                        <a href='' className="flex justify-center items-center  p-3 font-semibold border-solid hover:bg-slate-100 h-20">
                            <h1>Reservation</h1>
                        </a>
                        <a href='' className="flex justify-center items-center  p-3 font-semibold  h-20 hover:bg-slate-100">
                            <h1>Contact Us</h1>
                        </a>


                    </div>
                </div></>) : (<><div className='hidden top-0 left-0 bg-black opacity-40 w-full h-[100vh] z-10 duration-500'></div>
                    <div className="fixed top-0 -left-[500px] bg-white z-10 p-5 w-[500px] h-[100vh] duration-500 "></div></>)}

        </>
    )
}

export default Menu;