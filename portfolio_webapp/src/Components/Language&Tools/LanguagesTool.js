import './Languagestools.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Languages_Tool = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div data-aos="fade-right" className="LanguagesTool">
      <h1 data-aos="fade-right">Languages & Tools</h1>
      <div className="icon-container">
        <ul className='logo-container'>
          <li data-aos="fade-up" className='logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="C" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="C++" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="html" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="css" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Javascript" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Nodejs" />
          </li>
          <li data-aos="fade-up" className='logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="Reactjs" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Languages_Tool
