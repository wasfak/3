import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Ul/Hero";
import Services from "./components/Ul/Services";
import Portfolio from "./components/Ul/Portfolio";
import Contact from "./components/Ul/Contact";
import Approch from "./components/Ul/Approch";
import ContactUs from "./components/Ul/ContactUs";
import Teammember from "./components/Ul/Teammember";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approch />
        <Services />
        <Portfolio />
        <Teammember />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
