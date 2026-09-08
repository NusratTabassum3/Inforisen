import Hero from "../component/home/Hero";
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
      </main>
      <Footer />
    </div>
  );
}

export default home;
