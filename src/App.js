import About from './components/About';
import Clients from './components/Clients';
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
    </div>
  );
}

export default App;
