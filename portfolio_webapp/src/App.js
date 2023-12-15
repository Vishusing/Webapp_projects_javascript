import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Bio from './Pages/Bio/Bio';
import Awardscertificate from './Pages/Awardscertificate/Awardscertificate'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Bio' element={<Bio/>}/>
          <Route exact path='/Awardscertificate' element={<Awardscertificate/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
