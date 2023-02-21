import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Contactus from "./pages/ContactUs";

function App() {
  return<>
  
    <Router>
      <Routes>
        <Route path = "./pages/Home" element = {<Home/>} />
        <Route path = "./pages/AboutUs" element = {<Aboutus/>}/>
        <Route path = "./pages/ContactUs" element = {<Contactus/>} />
        
      </Routes>
    </Router>

  </>
}

export default App;
