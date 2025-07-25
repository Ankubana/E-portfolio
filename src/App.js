// src/App.jsx
import React from 'react';
import './index.css';
import'./index'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Modal from './components/Modal';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';

function App() {
  return (
    
    <>
    <BackgroundShapes/>
      <Navbar />
       <Modal />
       <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;