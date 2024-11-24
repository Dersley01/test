import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/img2.jpg";
import Footer from '../components/Footer';
import Trip from '../components/Trip';

function Tripcatalouge (){
    return(
        <>
        <Navbar />
       <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Trip Catalouge"
        btnClass="hide"
       /> 
       <Trip/>
        <Footer/>
        </>
    )
}

export default Tripcatalouge;