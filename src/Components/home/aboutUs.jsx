import c2 from '../../images/aboutUs/c2.png'
const AboutUs = () => {
    return (
        <div className="w-full p-10 ">
            <h1 className='w-full text-center text-2xl mb-10'>About Us</h1>
            <div className="flex flex-wrap justify-center items-center gap-14">
            <div className='w-[640px] h-full leading-8 tracking-wide md:leading-10 md:tracking-widest opacity-70'>
                <p className='text-sm md:text-xl'>
                    Welcome to [restaurant name], where our passion for food and hospitality come together to create a dining
                    experience unlike any other. Our team of expert chefs use only the freshest, locally sourced ingredients to
                    create dishes that are not only delicious but also visually stunning. We believe that dining should be an
                    immersive experience, where every aspect of the meal, from the ambiance to the presentation, contributes to a
                    memorable culinary journey. At [restaurant name], we strive to exceed your expectations and create a warm and
                    inviting atmosphere where you can relax, savor, and enjoy. Come join us for an unforgettable dining experience.
                </p>
            </div>
            <img className='hidden md:w-[640px] md:block' src={c2} alt="" width='500' />
            </div>
            <div className='line'></div>

        </div>
    )
}

export default AboutUs;