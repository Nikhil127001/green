import image from '../Images/display.jpg';
import '../styles/Body.css';
import Card from './Card';
import { data } from '../carddata.js';
import SectionTwo from './SectionTwo.js';
import Footer from './Footer.js';
const Body = () => {
    return (
        <div>
            <div className="crousel" >
                <img className="crouselImg" src={image} alt="no review" />
                <div className="textOuter">
                    <text className="displayText">100% ORGANIC</text>
                    <h3 className="heading">Green veggies: nature's fuel for a vibrant, healthy life. Nourish your body, savor the goodness!</h3>

                    <div className = "ButtonTwo">
              <text>View Details</text>
            </div>
                </div>
            
        </div>


                <div className="CardContainer">
                    {data.map((item, idx) => (
                        <Card key={idx} item={item} />
                    ))}
                </div>

                
            <SectionTwo/>

            <Footer/>
            
        </div>
    )
}
export default Body