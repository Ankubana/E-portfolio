// App.js
import React, { useState } from 'react';
import './index.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Modal from './components/Modal';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import Resume from './components/Resume';

function AppContent() {
  const location = useLocation();
  const isResumePage = location.pathname.toLowerCase() === "/resume";

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.classList.add('modal--open');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal--open');
  };

  return (
    <>
  
      {!isResumePage && <BackgroundShapes />}
      {!isResumePage && <Navbar />}
      {!isResumePage && <Hero onOpenModal={handleOpenModal} isModalOpen={isModalOpen} onCloseModal={handleCloseModal}/>}
      {!isResumePage && isModalOpen && <Modal onClose={handleCloseModal} />}
      {!isResumePage && <Projects />} 
      <Routes>
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;