import '../styles/Card.css';

const Card = (props) => {
    const { item } = props;
    return (
        <div className="CardOuter">
            <img className="image" src={item.image} alt="No preview" />
            <div className="textContainer">
                <text>{item.name}</text>
            </div>
            <div className="descContainer">
                <text>{item.description}</text>
            </div>
            <div className="textContainer">
            <div className = "Button">
              <text>View Details</text>
            </div>
            </div>
        </div>
    )
}
export default Card