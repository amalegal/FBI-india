import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Header from './components/header';
import Footer from './components/footer';
import Franchise from './Pages/Franchise';
import About from './Pages/About';
import Story from './Pages/Story';
import Faqs from './Pages/Franchise';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/franchise" element={<Franchise />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
