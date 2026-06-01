// src/App.js
import Navbar from "./Navbar";
import { Routes, Route, Form } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact"
import Appointment from "./Appointment"; // 👈 new
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import Doctors from "./Doctors";
import Blog from "./Blog";
import Departments from "./Departments";


const App = () => {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />   {/* ✅ new full page */}
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />  
    </>
  );
};

export default App;
