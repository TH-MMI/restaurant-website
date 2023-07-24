import Products from '../../json/products'
import { useDispatch } from 'react-redux';
import Add from '../../redux/actions/add';
const Hotsales = () => {
  // const products = useSelector((state) => state = state.products)
  const dispatch = useDispatch();
  return (
    <div className="w-full p-10 ">
      <h1 className='w-full text-center mb-10 text-4xl font-extralight font-quote'>HOT SALES</h1>
       <div className="flex flex-wrap justify-center gap-8 items-stretch">
      <div class="mt-10 flex gap-8 justify-center flex-wrap w-[90%]">
        {
          Products.products.map((item, index) => (
            
              <article class="relative flex flex-col overflow-hidden rounded-lg w-72 bg-gray-100">
                <div class="flew justify-center items-center overflow-hidden w-full h-52">
                  <img class="w-56 p-5 m-auto" src={item.image} alt="" />
                </div>
                <div class="absolute top-0 m-2 rounded-full bg-white">
                  <p class="rounded-full bg-black p-1 px-2 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                </div>
                <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div class="mb-2 flex items-center">
                    <p class="mr-3 text-lg font-bold">${item.price}</p>
                    <del class="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 class=" text-sm md:text-md font-semibold">{item.title}</h3>
                </div>
                <button onClick={() => dispatch(Add(
                    {
                        id: index, 
                        product : item
                    }
                ))} class="group mx-auto mb-2 flex h-11 w-10/12 items-stretch overflow-hidden rounded-md text-black">
                  <div class="flex w-full font-semibold items-center justify-center bg-gray-300 text-sm uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add to cart</div>
                  <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
                </button>
              </article>
            
          ))
        }
        </div>
      </div>
      <div className="w-full flex gap-5 mt-10 justify-center">
        <button className='rounded-md w-36 h-12 bg-emerald-500 text-white md:w-52 md:h-14 p-2 text-sm hover:w-40 md:hover:w-60 duration-300 md:text-lg '>Browse our menu</button>
      </div>

    </div>
  )
}

export default Hotsales;