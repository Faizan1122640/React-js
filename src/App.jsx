import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Services from './components/Services';
import BusinessPlan from './components/BusinessPlan';
import Features from './components/Features';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Services />
      <BusinessPlan />
      <Features />
    </div>
  );
}

export default App;