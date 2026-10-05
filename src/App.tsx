import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { TawkChat } from './components/TawkChat';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { Work } from './pages/Work/Work';
import { Contact } from './pages/Contact/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <TawkChat />
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
