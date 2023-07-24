import { Link } from "react-router-dom";
const HomeMenu = () => {
    return (
        <div className="w-full p-10 flex flex-col items-center bg-gray-100">
            <h1 className='w-full text-center text-4xl font-extralight mb-2 font-quote'>Menu</h1>
            <div className="flex w-[100%] md:w-[800%] justify-center items-center gap-20 pb-10 mt-10 flex-wrap">
                <img className='w-[60vh] h-[25vh] sm:h-[55vh] object-cover' src="https://www.bettybossi.ch/rdbimg/bb_scsc160101_0226a/bb_scsc160101_0226a_r01_v005_x0010.jpg" alt="" />
                <div className='flex flex-col gap-5 w-[50vh] p-10 px-2'>
                    <div className="flex gap-5 border-solid border-b-[1px] border-black">
                        <div className="">
                            <h1 className='font-bold md:text-xl mb-2'>Jack Fruit Tacos</h1>
                            <p className='mb-5 text-sm md:text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                        </div>
                        <p className='font-bold text-lg text-green-700'>80.50$</p>
                    </div>
                    <div className="flex gap-5 border-solid border-b-[1px] border-black">
                        <div className="">
                            <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                        </div>
                        <p className='font-bold text-lg text-green-700'>80.50$</p>
                    </div>
                    <div className="flex gap-5 border-solid border-b-[1px] border-black">
                        <div className="">
                            <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                        </div>
                        <p className='font-bold text-lg text-green-700'>80.50$</p>
                    </div>
                    <div className="flex gap-5">
                        <div className="">
                            <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                        </div>
                        <p className='font-bold text-lg text-green-700'>80.50$</p>
                    </div>

                </div>
            </div>
            <Link to='/menu' className="border-solid border-black border-b-[1px] h-10 text-left md:text-xl hover:text-lg md:hover:text-xl duration-300 hover:text-green-500 hover:border-green-500">Browse Our Menu </Link>
            <div className='line'></div>

        </div>
    )
}

export default HomeMenu;