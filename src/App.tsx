import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Reservation from "./sections/Reservation";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
