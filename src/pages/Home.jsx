import Advantages from "../component/home/Advantages";
import Faq from "../component/home/Faq";
import Hero from "../component/home/Hero";
import HowItWorks from "../component/home/HowItWorks";
import PaymentMethods from "../component/home/PaymentMethods";
import Services from "../component/home/Services";
import SocialGrowth from "../component/home/SocialGrowth";
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
        <PaymentMethods />
        <SocialGrowth />
        <Advantages />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default home;
