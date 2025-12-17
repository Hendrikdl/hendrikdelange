import './App.css';
import NavbarComponent from './Navbar';
import Home from './Home';
import About from './Abous';
import Contact from './Contact';
import Services from './Services';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
