import Navbar from '../navbar'
import Header from './header';
import Hotsales from './hotsales';
import AboutUs from './aboutUs';
import Gallery from './gallery';
import Footer from '../footer';
import HomeMenu from './menu';
const Home = () => {

    return (
      <div>
        <Navbar />
        <Header image='https://assets.architecturaldigest.in/photos/63733ec2a2dd6ea6560eb6da/16:9/w_1615,h_908,c_limit/Ditas%20Interior%20Image%20-%201%20(8).png' title="Discover the art of fine" title2="dining and elevate your taste experience with us"/>
        <AboutUs />
        <Hotsales />
        <HomeMenu />
        <Gallery />
      </div>
    );
  }
  
  export default Home;