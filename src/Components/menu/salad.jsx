
import useMobileDetect from "../../isMobile";

const Salad = () => {
    const isMobile = useMobileDetect()
    return (
        <div className="flex w-full justify-center items-center gap-20 pb-10 mt-10 flex-wrap">
        {isMobile ? (
         <img className='w-[60vh] mt-10 h-[40vh] object-cover' src="https://www.bettybossi.ch/rdbimg/bb_scsc160101_0226a/bb_scsc160101_0226a_r01_v005_x0010.jpg" alt="" width='500' />
        ) : (
            <img className='block w-[60vh] h-[55vh] object-cover' src="https://www.bettybossi.ch/rdbimg/bb_scsc160101_0226a/bb_scsc160101_0226a_r01_v005_x0010.jpg" alt="" width='500' />
        )}
             
        <div className='flex flex-col gap-5 w-[50vh] p-10 px-2'>
            <div className="flex gap-5 border-solid border-b-[1px] border-black">
                <div className="">
                    <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                    </div>
                <p className='font-bold text-lg'>80.50$</p>
            </div>
            <div className="flex gap-5 border-solid border-b-[1px] border-black">
                <div className="">
                    <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                    </div>
                <p className='font-bold text-lg'>80.50$</p>
            </div>
            <div className="flex gap-5">
                <div className="">
                    <h1 className='font-bold text-xl mb-2'>Jack Fruit Tacos</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
                    </div>
                <p className='font-bold text-lg'>80.50$</p>
            </div>
          
        </div>
       
    </div>
    )
}

export default Salad;