import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/img7.jpg";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact (){
    return(
        <>
        <Navbar />
       <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact Us"
        btnClass="hide"
       />
       <ContactForm
            contimg="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63543.82663464304!2d7.459775900000001!3d5.4941271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1732448483239!5m2!1sen!2sng"
       />
        <Footer/>
        </>
    )
}

export default Contact;