import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/cuba1.jpg";
import Trip2 from "../assets/dubai.jpg";
import Trip3 from "../assets/egypt.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p className="para">Discover Unique Destinations using Google Maps</p>
            <div className="tripcard">
                <TripData 
                    image={Trip1}
                    heading="Trip in Cuba"
                    text="Cuba is a vibrant Caribbean island with a rich history, diverse landscapes, and a unique culture. Known for its lively music, dance, historic architecture, beautiful beaches, and classic cars, it blends colonial heritage with communist influence, offering a fascinating experience."
                />
                <TripData 
                    image={Trip2}
                    heading="Trip in Dubai"
                    text="Dubai is a modern, dynamic city in the United Arab Emirates, known for its futuristic skyline, luxury shopping, and high-end hotels. Famous for the Burj Khalifa, artificial islands, and vibrant nightlife, Dubai blends traditional Arabian culture with cutting-edge innovation."
                />
                <TripData 
                    image={Trip3}
                    heading="Trip in Egypt"
                    text="Egypt is a country in northeastern Africa, renowned for its ancient civilization and iconic landmarks, including the pyramids, the Sphinx, and the Nile River. Rich in history, culture, and archaeological treasures, it offers a unique blend of past and present."
                />
            </div>
        </div>
    );
}


export default Trip;