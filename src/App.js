import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Contactus from "./pages/ContactUs";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return<>
  
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<Aboutus/>}/>
        <Route path = "/contactus" element = {<Contactus/>} />
        <Route path = "/dashboard" element = {<Dashboard/>} />
      </Routes>
    </Router>

  </>
}

export default App;
