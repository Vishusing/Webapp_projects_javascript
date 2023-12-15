import { SocialIcon } from 'react-social-icons';
import './Footer.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const socialLinks = [
    'https://www.linkedin.com/in/vishal-singh-425978224/',
    'https://github.com/Vishusing',
    'https://www.facebook.com/vishu299901',
    'mailto:vs299901@gmail.com',
    'https://www.instagram.com/_vishu.19_',
    'https://t.me/vs299901'
];


const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="footer">
            <div className="contact">
                <div data-aos="fade-up" className="social-icons">
                    {socialLinks.map((link, index) => (
                        <SocialIcon className='social-icon' key={index} url={link} />
                    ))}
                </div>
                <br />
                <h1 data-aos="fade-up" >Contact us</h1>
                <br />
                <p data-aos="fade-up">
                    Thanks for visiting
                </p>
            </div>
        </div>
    )
}

export default Footer
