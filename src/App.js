import About from './components/About';
import Blog from './components/Blog';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
