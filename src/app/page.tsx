import Herosection from "@/app/components/hero-section/herosection"
import About from "./about/page";
 import Services from "./services/page";
 import Contact from "./contact/page";

export default function Home() {
  return (
   <div>
    <Herosection/>
    
    <About/> 

    <Services/>
    <Contact/> 
   </div>
  );
}