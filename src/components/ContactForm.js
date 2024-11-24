import "./ContactFormStyles.css";

function ContactForm(props){
    return(
        <div className="form-container">
            <h1>Send Us A Message</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
            <div className="contact">
                <iframe src={props.contimg}></iframe>
            </div>
        </div>
    );
}


export default ContactForm;