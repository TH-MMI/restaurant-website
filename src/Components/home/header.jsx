const Header = () => {
    return (
        <div className="h-[50vh] relative lg:h-[80vh] sm:h-[60vh] md:h-[70vh] xl:h-[100vh]">
            <img className='w-[100%] h-full object-cover absolute top-0 z-[-2] ' src="images/aboutUs/c3.png" alt="" />
            <div className="flex justify-center items-center h-full">
                <h1 className="font-quote text-3xl text-white text-center lg:text-4xl xl:text-5xl  p-14" >Discover the art of fine <br />dining and elevate your taste experience with us</h1>
            </div></div>
    )
}

export default Header;