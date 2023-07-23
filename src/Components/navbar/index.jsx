import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Cart from '../home/cart';
import Menu from './menu';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [status, setStatus] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleChildClick = () => {
    setStatus(false);
  };

  const handleParentClick = () => {
    setStatus(true);
  };

  const menuChildClick = () => {
    setMenu(false);
  };

  const menuParentClick = () => {
    setMenu(true);
  };

  return (
    <nav className={scrolled ? "flex justify-between items-center bg-slate-100  h-14 z-10 px-8 fixed w-full top-0 md:px-8 md:justify-around md:h-16 duration-200" : "flex justify-between items-center  bg-transparent h-14 z-10 px-8 fixed w-full top-0 md:px-8 md:justify-around md:h-20 duration-200"} >
      <div>
        <h1 className="text-2xl font-bold text-emerald-500">LOGO</h1>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="/">Home</a>
        <a href="/">Reservation</a>
        <a href="/">Menu</a>
        <a href="/">Contact Me</a>
      </div>
      <div className='flex items-center hidden gap-5 md:flex'>

        <button className=" bg-emerald-500 text-white h-10 w-28 rounded-md font-semibold tracking-wider">
          Join US
        </button>
        <button onClick={handleParentClick}>
          <FontAwesomeIcon className='text-xl text-emerald-500 ' icon={faCartShopping} />
        </button>

      </div >
      <div className='flex items-center gap-5 md:hidden' >
        <FontAwesomeIcon onClick={handleParentClick} className='text-xl text-black ' icon={faCartShopping} />
        
        <button onClick={menuParentClick} className=" text-black text-2xl rounded-md  ">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>


      <Cart statu={status} childClick={handleChildClick} />
      <Menu statu={menu} childClick={menuChildClick} />
    </nav>
  );
};

export default Navbar;
