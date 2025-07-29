import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Modal from './components/Modal';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import Resume from './components/Resume';
import { BrowserRouter as Router,Routes,Route,useLocation,} from "react-router-dom";
// Move logic into a sub-component INSIDE the Router
function AppContent() {
  const location = useLocation();
  const isResumePage = location.pathname === "/Resume";

  return (
    <> 
       {!isResumePage && <BackgroundShapes />}
       
      {!isResumePage && <Navbar />}
      {!isResumePage && <Hero />}
      {!isResumePage && <Modal />}
      {!isResumePage && <Projects />}
      
      <Routes>
        <Route path="/Resume" element={<Resume />} />
      </Routes>
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
m
export default App;
