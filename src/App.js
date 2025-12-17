import './App.css';
import NavbarComponent from './Navbar';
import Home from './Home';
import About from './Abous';
import Contact from './Contact';
import Services from './Services';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

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
      <footer style={{ backgroundColor: '#007bff', color: 'white', padding: '20px 0', marginTop: 'auto' }}>
        <Container className="text-center">
          <p style={{ margin: 0 }}>Contact: 076 721 7324 | Email: hendrik@alenticapitalfas.co.za</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
