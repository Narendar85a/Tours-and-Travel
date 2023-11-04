import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/navfolder/About'
import Service from './components/navfolder/Service'
import Contact from './components/navfolder/Contact'
import Booking from './components/navfolder/Booking'
import Home from './components/navfolder/Home'

function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/booking' element={<Booking />} />
     </Routes>
     <Footer />

    </BrowserRouter>
    
  );
}

export default App;
