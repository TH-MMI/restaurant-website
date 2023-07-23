import Navbar from '../navbar'
import Header from './header';
import Hotsales from './hotsales';
import AboutUs from './aboutUs';
import Gallery from './gallery';
import Footer from '../footer';
const Home = () => {

    return (
      <div>
        <Navbar />
        <Header />
        <Hotsales />
        <AboutUs />
        <Gallery />
        <Footer />
      </div>
    );
  }
  
  export default Home;