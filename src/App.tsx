import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Blog from './components/Blog';
import FooterVariant1 from './components/FooterVariant1';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <FooterVariant1 />
    </div>
  );
}

export default App;
