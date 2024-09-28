import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Component/About";
import Event from "./Component/Event";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Menu from "./Component/Menu";
import Landing from "./Component/Landing";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />  
      </Routes>
      
      {/* <About/>
      <Event/>
      <Contact/> */}
      <Footer />
    </Router>
  );
}

export default App;
