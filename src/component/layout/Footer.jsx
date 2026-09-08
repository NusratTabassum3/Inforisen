import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { footerData } from "../../data/footer";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#b34000] via-[#802600] to-[#4d1300] text-white pt-12 pb-6 px-4 font-sans relative overflow-hidden">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Logo, Text & Social Icons */}
          <div className="flex flex-col items-start space-y-4">
            <div className="bg-white px-8 py-3 rounded-xl shadow-md w-fit">
              <span className="text-[#d65108] font-black tracking-widest text-lg uppercase">
                LOGO
              </span>
            </div>
            <p className="text-xs text-orange-100 leading-relaxed max-w-sm">
              {footerData.description}
            </p>
            <div className="flex space-x-2 pt-2">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaYoutube />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="w-8 h-8 rounded-lg bg-orange-950/40 border border-orange-400/30 flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-200 text-xs shadow-inner"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              {footerData.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-orange-100/90 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Pages */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
              Services Pages
            </h3>
            <ul className="space-y-2 text-xs">
              {footerData.servicesPages.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="text-orange-100/90 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
              Contact Info
            </h3>
            <div className="space-y-3 text-xs text-orange-100/90">
              <div className="flex items-center space-x-3">
                <span className="p-2 rounded-md bg-orange-950/40 border border-orange-400/30 text-white shrink-0">
                  <FaEnvelope className="text-xs" />
                </span>
                <a
                  href={`mailto:${footerData.contactInfo.email}`}
                  className="hover:text-white"
                >
                  {footerData.contactInfo.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <span className="p-2 rounded-md bg-orange-950/40 border border-orange-400/30 text-white shrink-0">
                  <FaPhoneAlt className="text-xs" />
                </span>
                <a
                  href={`tel:${footerData.contactInfo.phone}`}
                  className="hover:text-white"
                >
                  {footerData.contactInfo.phone}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <span className="p-2 rounded-md bg-orange-950/40 border border-orange-400/30 text-white shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-xs" />
                </span>
                <div>
                  <p>{footerData.contactInfo.address}</p>
                  <p className="font-semibold text-white mt-0.5">
                    {footerData.contactInfo.support}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-8 pt-4">
          <div className="bg-[#3a0d00]/80 backdrop-blur-md rounded-xl py-3 px-4 text-center border border-orange-900/40">
            <p className="text-[11px] md:text-xs text-orange-200/90 tracking-wide font-medium">
              {footerData.copyright}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
