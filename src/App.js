import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Contactus from "./pages/ContactUs";

function App() {
  return<>
  
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<Aboutus/>}/>
        <Route path = "/contactus" element = {<Contactus/>} />
        
      </Routes>
    </Router>

  </>
}

export default App;
