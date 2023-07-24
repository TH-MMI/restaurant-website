import l1 from '../../images/gallery/l1.jpg'
import c3 from '../../images/aboutUs/c3.jpg'
import l2 from '../../images/gallery/l2.jpg'
import l3 from '../../images/gallery/l3.jpg'
import l4 from '../../images/gallery/l4.jpg'
import l5 from '../../images/gallery/l5.jpg'

const Gallery = () => {
    return (
        <>
        <div id='sm' className="flex justify-center md:hidden">
            <img className='w-[40vh] h-[30vh] sm:w-[50vh] sm:h-[35vh] object-cover rounded-xl mb-5' src={c3} alt="" />
        </div>
        <div id='md' className="hidden xl:flex xl:h-96 w-full">
            <img className='w-[20%] object-cover opacity-80 hover:opacity-100 duration-300' src={l1} alt="" />
            <img className='w-[20%] object-cover opacity-80 hover:opacity-100 duration-300' src={l2} alt="" />
            <img className='w-[20%] object-cover opacity-80 hover:opacity-100 duration-300' src={l3} alt="" />
            <img className='w-[20%] object-cover opacity-80 hover:opacity-100 duration-300' src={l4} alt="" />
            <img className='w-[20%] object-cover opacity-80 hover:opacity-100 duration-300' src={l5} alt="" />
        </div>
        </>
    )
}

export default Gallery;