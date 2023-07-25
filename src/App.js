import Home from './Components/home';
import Menu from './Components/menu';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Reservation from './Components/reservation';
import FindUS from './Components/FindUs/FindUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollToTop from './scrollToTop';
function App() {

  const [loading, setLoading] = useState(true);
  // Other state variables for data, error handling, etc.

  // useEffect hook to simulate data fetching (replace with actual API call)
  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      setLoading(false); // Once the data is fetched, set loading to false
      // Update other state variables with fetched data if applicable
    }, 2000); // Simulated loading time of 2 seconds
  }, []);

  return (
    <>
      {loading ?
        <div className='w-full h-full flex justify-center items-center'>
          <div class="flex justify-center items-center min-h-screen relative">
            <div class="absolute w-12 h-12 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
        :
        <>
          <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/reservation' element={<Reservation />} />
              <Route path='/findus' element={<FindUS />} />
            </Routes>
            <Footer />
          </Router></>}
    </>
  );
}

export default App;
