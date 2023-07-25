
const AboutUs = () => {
    return (
        <div className="w-full p-10 ">
            <div className="flex flex-wrap justify-center items-center gap-14">
            <div className='w-[60vh] '>
                <h1 className='uppercase text-2xl text-center md:text-4xl font-bold mb-2 md:mb-5 text-green-600 md:text-left font-quote' >About burcos</h1>
                <p className='text-xs text-center md:text-lg md:font-bold md:text-left'>
                    Welcome to [restaurant name], where our passion for food and hospitality come together to create a dining
                    experience unlike any other. Our team of expert chefs use only the freshest, locally sourced ingredients to
                    create dishes that are not only delicious but also visually stunning. We believe that dining should be an
                    immersive experience, where every aspect of the meal, from the ambiance to the presentation, contributes to a
                    memorable culinary journey. At [restaurant name], we strive to exceed your expectations and create a warm and
                    inviting atmosphere where you can relax, savor, and enjoy. Come join us for an unforgettable dining experience.
                </p>
            </div>
            <img className='w-[60vh] h-[30vh] rounded-md md:w-[60vh] md:h-[55vh] md:block object-cover md:rounded-none' src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            </div>

        </div>
    )
}

export default AboutUs;