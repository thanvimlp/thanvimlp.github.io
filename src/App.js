import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProduceSection from "./ProduceSection";
import SupplySection from "./SupplySection";
import TestimonialSection from "./TestimonialSection";
import InstaSection from "./InstaSection";
import FormSection from "./FormSection";
import LogoSection from "./LogoSection";
import FullFooter from "./FullFooter";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProduceSection />
      <SupplySection />
      <TestimonialSection />
      <InstaSection />
      <FormSection />
      <LogoSection />
      <FullFooter />
      <Footer />
    </div>
  );
}

export default App;
