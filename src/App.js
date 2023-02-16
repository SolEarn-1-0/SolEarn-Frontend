import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/ContactUs";

function App() {
  return<>
    
    <Router>
      <Routes>
        <Route path = "/about" element = {<Aboutus/>}/>
        <Route path = "/contactus" element = {<Contactus/>} />
      </Routes>
    </Router>

  </>
}

export default App;
