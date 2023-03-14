import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Contactus from "./pages/ContactUs";
import Dashboard from "./pages/dashboard/dashboard";
import GetStarted from "./pages/getStarted";
import BusinessRegisteration from "./pages/businessRegisteration";
import WorkerRegisteration from "./pages/workerRegisteration";
import Signin from "./pages/Signin";

function App() {
  return<>
  
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<Aboutus/>}/>
        <Route path = "/contactus" element = {<Contactus/>} />
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/getstarted" element = {<GetStarted/>} />
        <Route path = "/business/sign-up" element = {<BusinessRegisteration/>} />
        <Route path = "/worker/sign-up" element = {<WorkerRegisteration/>} />
        <Route path = "/signin" element = {<Signin/>} />
      </Routes>
    </Router>

  </>
}

export default App;
