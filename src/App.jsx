import { useCallback, useState } from 'react';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useCallback((p) => {
    setPage(p);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  let PageComponent;
  if (page === 'about') PageComponent = <AboutPage navigate={navigate} />;
  else if (page === 'services') PageComponent = <ServicesPage navigate={navigate} />;
  else if (page === 'projects') PageComponent = <ProjectsPage navigate={navigate} />;
  else if (page === 'contact') PageComponent = <ContactPage navigate={navigate} />;
  else PageComponent = <HomePage navigate={navigate} />;

  return (
    <div className="stratum-root">
      <Navbar page={page} navigate={navigate} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} page={page} navigate={navigate} />
      <main key={page}>
        {PageComponent}
      </main>
      <Footer navigate={navigate} />
      <WhatsAppFloat />
    </div>
  );
}
