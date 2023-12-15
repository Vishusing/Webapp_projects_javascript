import Footer from "../../Components/Footer/Footer"
import LanguagesTool from "../../Components/Language&Tools/LanguagesTool"
import Nav from "../../Components/Navbar/Nav"
import Phototext from "../../Components/Phototext/Phototext"
import Quickintro from "../../Components/Quickintro/Quickintro"


const Home = () => {
 
  return (
    <>
      <Nav />
      <Phototext/>
      <Quickintro/>
      <LanguagesTool/>
      <Footer/>
    </>
  )
}

export default Home
