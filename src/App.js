import React from 'react';
import AppNavbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import ScheduleForm from './components/ScheduleForm';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Garante que o footer fique no fim */}
      <AppNavbar />
      <main> {/* Conteúdo principal */}
        <HeroCarousel />
        <About />
        <ScheduleForm />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;