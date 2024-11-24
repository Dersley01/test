import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/img4.jpg";
import Footer from '../components/Footer';

function Tourreview (){
    return(
        <>
        <Navbar />
       <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Tour Reviews"
        btnClass="hide"
       />
        <Footer/>
        </>
    )
}

export default Tourreview;