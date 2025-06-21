
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./pages/Login"
import Register from "./pages/Register";
import NotFound from "./pages/NotFound"
import AboutUs from "./pages/AboutUs";
import JadwalDokter from "./pages/JadwalDokter";
import Pelayanan from "./pages/Pelayanan";
import Contact from "./pages/Contact";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="AboutUs" element={<AboutUs/>} />
        <Route path="JadwalDokter" element={<JadwalDokter/>} />    
        <Route path="Pelayanan" element={<Pelayanan/>} />   
        <Route path="Contact" element={<Contact/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
