import Hero from "../component/home/Hero";
import Footer from "../component/layout/Footer";
import Navbar from "../component/layout/Navbar";

function home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default home;
