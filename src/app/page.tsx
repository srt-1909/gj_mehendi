import { ContactSection } from "./components/ContactSection";
import Navbar from "./components/Navbaar";
import { TestimonialsSection } from "./components/Testonomials";
import WhyUsSection from "./components/WhyUs";


export default function Home() {
  return (
    <>
    <Navbar/>
    <WhyUsSection/>
    <TestimonialsSection/>
    <ContactSection/>
    </>
  );
}
