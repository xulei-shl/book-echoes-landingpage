import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Flow from './components/Flow';
import Footer from './components/Footer';
import './styles/variables.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Flow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
