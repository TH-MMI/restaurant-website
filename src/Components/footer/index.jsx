

const Footer = () => {
   

    return (
        <div className="w-full p-10 ">
            <h1 className='w-full text-center text-2xl mb-10 font-bold'>LOGO</h1>
            <div className="flex flex-col gap-5 items-center md:gap-20 md:flex-row md:justify-center">
                <div>
                <h1 className='w-full text-2xl  mb-2 font-semibold md:mb-5'>Contact informations</h1>
                <p className='text-left md:mb-3 tracking-wider'>info@food.com</p>
                <p className='text-left md:mb-3 tracking-wider'>+212 625147895</p>
                <p className='text-left tracking-wider'>201 street one , Kenitra</p>
                </div>
                <div><h1 className='w-full  text-2xl mb-2 font-semibold md:mb-5'>Time</h1>
                <p className='text-left md:mb-3 tracking-wider'>Tuesday-thusday : 12am - 9pm</p>
                <p className='text-left md:mb-3 tracking-wider'>Friday - Sunday : 12am - 11pm</p>
                <p className='text-left tracking-wider'>Monday : Closed</p>
            </div></div>
            
        </div>
    )
}

export default Footer;