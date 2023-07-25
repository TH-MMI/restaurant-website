import { Link } from "react-router-dom";
import Salad from "../menu/salad";
const HomeMenu = () => {
    return (
        <div className="w-full p-10 flex flex-col items-center bg-gray-100">
            <h1 className='w-full text-center text-4xl font-extralight mb-2 font-quote'>Menu</h1>
            <Salad />
            <Link to='/menu' className="border-solid border-black border-b-[1px] h-10 text-left md:text-xl hover:text-lg md:hover:text-xl duration-300 hover:text-green-500 hover:border-green-500 ">Browse Our Menu </Link>
            <div className='line'></div>

        </div>
    )
}

export default HomeMenu;