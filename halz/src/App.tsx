import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import ContactTeam from "./components/ContactTeam";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <ContactTeam />
    </>
  );
}

export default App;