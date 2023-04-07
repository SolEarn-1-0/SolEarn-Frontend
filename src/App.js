import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Contactus from "./pages/ContactUs";
import Dashboard from "./pages/dashboard/dashboard";
import Wallet from "./pages/userwallet/Wallet";
import GetStarted from "./pages/getStarted";
import BusinessRegisteration from "./pages/businessRegisteration";
import WorkerRegisteration from "./pages/workerRegisteration";
import Admin from "./pages/admin/Admin";
function App() {
  return<>
  
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<Aboutus/>}/>
        <Route path = "/contactus" element = {<Contactus/>} />
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/wallet" element = {<Wallet/>} />
        <Route path = "/getstarted" element = {<GetStarted/>} />
        <Route path = "/business/sign-up" element = {<BusinessRegisteration/>} />
        <Route path = "/worker/sign-up" element = {<WorkerRegisteration/>} />
        <Route path = "/admin" element = {<Admin/>} />
      </Routes>
    </Router>

  </>
}

export default App;
