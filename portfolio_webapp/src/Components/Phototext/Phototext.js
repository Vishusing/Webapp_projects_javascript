import './Phototext.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Typical from "react-typical";

const Phototext = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="textphotoarea" data-aos="fade-up" >
            <h1 data-aos="fade-up">Hii...<br />Nice to meet you <br />
                <Typical wrapper="span" steps={[
                    'Myself.. Vishal Singh', 3000,
                    'I am Web Developer', 3000,
                    'Data Analyst', 3000,
                    'and Python Enthusiast', 3000,
                    'Learning MERN', 3000
                ]} loop={Infinity} className="typical" />
            <p data-aos="fade-up" style={{color:'red'}}>
                Currently in development stage...
            </p></h1>
        </div>
    )
}

export default Phototext
