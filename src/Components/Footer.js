import '../styles/Footer.css';
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";



const data = [
  {
    section: "vegetables",
    items: [
      {
        name: "Organic tomatoes"
      },
      { name: "Organic Carrots" },
      { name: "Organic Beetroot" },
      {
        name: "Organic Leafy veggies"
      }
    ]
  }
]

const Footer = () => {
  return (
    <div className="FooterOuter">
      <div>
        <img className="ImgFooter" src={"https://res.cloudinary.com/deumuo4ko/image/upload/v1708680757/organic_beetroot_u26okc.jpg"} alt="no review" />
        <div className="LinksContainer">
          <div className='footerLinks'>
            <text className="footerHeadingStyle">Green.com</text>
            <div style={{ marginTop: '15px' }}>

              <li style={{listStyle: 'none' }}>Green vegetables: Nature's nutrient-packed jewels, fueling health, vitality, and a vibrant life with every crisp, fresh bite</li>
            </div>
          </div>
          {data.map((item, idx) => (
            <div className='footerLinks'>
              <text className="footerHeadingStyle">{item.section}</text>
              <div style={{ marginTop: '15px' }}>
                {item.items.map((data, idx) => (
                  <li style={{ color: 'yellow', listStyle: 'none' }} key={idx}>{data.name}</li>
                ))}
              </div>
            </div>
          ))}
          {data.map((item, idx) => (
            <div className='footerLinks'>
              <text className="footerHeadingStyle">Quick Navs & links</text>
              <div style={{ marginTop: '15px' }}>
                {item.items.map((data, idx) => (
                  <li style={{ color: 'yellow', listStyle: 'none' }} key={idx}>{data.name}</li>
                ))}
              </div>

            </div>
          ))}

          <div className='footerLinks'>
            <text className="footerHeadingStyle">Contact Us</text>
            <div style={{ marginTop: '15px' }}>

              <li style={{listStyle: 'none' }}>Address : 123 Main Street
                Anytown, USA 12345</li>
              <div>
                <input className="inputBox" placeholder="Enter your Email" ></input>
                <button className="goButton">{'>'}</button>
              </div>
            </div>
          </div>
          <div className= "socialLinks">
          <text className = "socialLinksLine">© 2023-2024 Green. All rights reserved</text>
          <div className = "socialIcons"> 
          <FaTwitter className='iconsStyle'/>
          <FaSquareInstagram className='iconsStyle'/>
          <IoMdMail className='iconsStyle'/>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Footer