import '../styles/CardTwo.css';
const CardTwo = (props) => {
    const {item} = props; 
  return (
<div className="CardOuterTwo">
            <img className="imageTwo" src={item.image} alt="No preview" />
            <div className="textContainerTwo">
                <text>{item.heading}</text>
            </div>
            <div className="descContainerTwo">
                <text>{item.description}</text>
            </div>
        </div>  )
}
export default CardTwo