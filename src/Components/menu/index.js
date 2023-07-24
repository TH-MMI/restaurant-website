import Tacos from "./tacos";
import Burger from "./burger";
import Dessert from "./dessert";
import Salad from "./salad";

const Menu = () => {
    return (
        <>
            <div className="w-full p-10 flex flex-col items-center mt-[7vh]">
                <h1 className='w-full text-center text-4xl font-extralight'>Menu</h1>
                <p className='text-center md:w-[60vh] text-sm sm:text-2xl font-quote p-10 mb-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dicta a deleniti! Et nihil exercitationem perferendis quos ut dignissimos sed.</p>
                <Tacos />
                <Burger />
                <Dessert />
                <Salad />
                <div className='line'></div>

            </div>
        </>
    )
}

export default Menu