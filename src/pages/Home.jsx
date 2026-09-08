import Hero from "../component/home/Hero";
import HowItWorks from "../component/home/HowItWorks";
import Services from "../component/home/Services";
import Stats from "../component/home/Stats";
import Footer from "../component/layout/Footer";
import Navbar from "../component/layout/Navbar";

function home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default home;
