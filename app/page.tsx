import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero"
import Catalog from "./components/Catalog";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Catalog/>
      <Services/>
      <About/>
      <Footer/>
    </main>
  );
}