import Home from './Components/home';
import Menu from './Components/menu';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Reservation from './Components/reservation';
import FindUS from './Components/FindUs/FindUs';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { useEffect  } from 'react';
import ScrollToTop from './scrollToTop';
function App() {

  return (
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
      </Router>
    </>
  );
}

export default App;
