

const Header = ({title , title2 , image}) => {
    return (
        <div className="h-[50vh] relative lg:h-[80vh] sm:h-[60vh] md:h-[70vh] xl:h-[100vh]">
            <div className="flex justify-center items-center z-10 h-full">
                <h1 className="font-quote text-2xl text-white text-center md:text-2xl lg:text-4xl xl:text-5xl  p-14" >{title} <br /> {title2}</h1>
            </div>
            <div className='bg-black w-full h-full opacity-50 absolute z-[-1] top-0'></div>
            <img className='w-[100%] h-full object-cover absolute top-0 z-[-2] ' src={image} alt="" />
            </div>
    )
}

export default Header;