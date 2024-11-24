import Mountain1 from "../assets/eiffel3.jpg";
import Mountain2 from "../assets/fuji2.jpg";
import Mountain3 from "../assets/image.jpg";
import Mountain4 from "../assets/tower1.jpg";
import "./DestinationStyles.css"
import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p className="para">Tours give you opportunity to see a lot within the time format</p>

            <DestinationData
                className="first-des"
                heading="Eiffel Tower, Paris"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores magni aspernatur, quidem fuga labore numquam pariatur est exercitationem eum? Necessitatibus odio in magni, quod molestiae nihil reprehenderit exercitationem hic recusandae. Aut cum, laboriosam harum fugit quidem alias reiciendis doloremque! Iure dolorum expedita pariatur atque perspiciatis fugit ullam vel hic."
                img1={Mountain1}
                img2={Mountain4}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Mount Fuji, Japan"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores magni aspernatur, quidem fuga labore numquam pariatur est exercitationem eum? Necessitatibus odio in magni, quod molestiae nihil reprehenderit exercitationem hic recusandae. Aut cum, laboriosam harum fugit quidem alias reiciendis doloremque! Iure dolorum expedita pariatur atque perspiciatis fugit ullam vel hic."
                img1={Mountain3}
                img2={Mountain2}
            />
        </div>
    );
};


export default Destination;