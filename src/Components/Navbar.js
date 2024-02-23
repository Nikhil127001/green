import '../styles/Navbar.css';
import image from '../Images/green.png';
const Navbar = () => {
  return (
    <div className = "navOuter" >
       <div className = "logoContainer">
       <img className = "logo" src = {image} alt = "Green"/>
       </div>
       <div className = "NavigationComponent">
            <text className = "navTabs">Menu</text>
            <text className = "navTabs">Services</text>
            <text className = "navTabs">Contact Us</text>
            <text className = "navTabs">About Us</text>
       </div>
    </div>
  )
}
export default Navbar