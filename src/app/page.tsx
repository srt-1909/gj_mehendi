import AboutUs from "./components/AboutUs";
import { ContactSection } from "./components/ContactSection";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbaar";
import PromoBanner from "./components/Promo";
import ServicesSection from "./components/Service";
import { TestimonialsSection } from "./components/Testonomials";
import WhyUsSection from "./components/WhyUs";

export default function Home() {
  return (
    <>
    <PromoBanner/>
      <Navbar />
      
      {/* Image after Navbar */}
      <div className="relative w-full">
        <img 
          src="/image 1Banner.svg" // Make sure the image is in the public folder with this name
          alt="Banner Image"
          className="w-full h-auto object-cover"
        />
      </div>
      <HeroSection/>
      <ServicesSection/>

      <AboutUs /> 
      <Gallery/>
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
