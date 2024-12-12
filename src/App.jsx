import { React } from "react";

import "./App.css";
import Navbar from "./Navbar";
import { Hero } from "./COMPONENTS/Hero";
import About from "./COMPONENTS/About";
import Services from "./COMPONENTS/Services";
import Different from "./COMPONENTS/Different";
import Testimonial from "./COMPONENTS/Testimonial";
import PhotoGallery from "./COMPONENTS/PhotoGallery";
import Footer from "./COMPONENTS/Footer";
import TrustedBrands from "./COMPONENTS/TrustedBrands";
import ContactForm from "./COMPONENTS/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <ContactForm />
      </section>

      <Different />
      <section id="testimonial">
        
      <Testimonial />
      </section>
      <PhotoGallery />
      <TrustedBrands />
      <Footer />
    </div>
  );
}

export default App;
