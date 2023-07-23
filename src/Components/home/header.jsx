import c1 from '../../images/freepik/food-background.jpg'

const Header = () => {
    return (
        <div className="h-[50vh] relative lg:h-[80vh] sm:h-[60vh] md:h-[70vh] xl:h-[100vh]">
            <img className='w-[100%] h-full object-cover absolute top-0 z-[-2] opacity-80' src={c1} alt="" />
            <div className="flex justify-center items-center h-full">
                <h1 className="font-quote text-2xl text-black text-center md:text-2xl lg:text-4xl xl:text-5xl  p-14" >Discover the art of fine <br />dining and elevate your taste experience with us</h1>
            </div></div>
    )
}

export default Header;