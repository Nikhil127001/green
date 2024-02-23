import image from '../Images/display.jpg';
import '../styles/SectionTwo.css';
import { data2 } from '../SecondCardData.js';
import CardTwo from './CardTwo.js';
const SectionTwo = () => {
    return (
        <div className="outer">
            <div className="crousel" >
                <img className="crouselImgTwo" src={image} alt="no review" />
                <div className="textOuterTwo">
                    <text className="displayTextTwo">FRESH & NON-GMO PRODUCTS</text>
                    <h5 className="heading">Green veggies: nature's fuel for a vibrant, healthy life. Nourish your body, savor the goodness!</h5>
                </div>

            </div>


            <div className="CardContainer">
                {data2.map((item, idx) => (
                    <CardTwo key={idx} item={item} />
                ))}
            </div>
        </div>
    )
}
export default SectionTwo