import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "../../data/navigation";
import Button from "../common/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <header className="absolute left-0 top-0 z-50 w-full pt-4 md:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex h-11 w-28 items-center justify-center rounded-xl bg-white text-xs font-black tracking-wider text-orange-500 shadow-sm transition-transform duration-200 hover:scale-105"
        >
          LOGO
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => {
            const isActive = activeNav === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveNav(item.name)}
                className={`text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="rounded-xl border-orange-500 bg-white px-5 py-2.5 text-xs font-medium text-orange-500 shadow-sm transition-all duration-200 hover:bg-orange-50 active:scale-95"
          >
            Sign In
          </Button>

          <Button className="rounded-xl bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 active:scale-95">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl bg-white p-2.5 text-gray-700 shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-4 mt-3 rounded-2xl bg-white p-5 shadow-xl md:hidden">
          <nav className="flex flex-col gap-3">
            {navigation.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.name);
                    setIsOpen(false);
                  }}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 flex gap-3">
            <Button
              variant="outline"
              className="w-1/2 rounded-xl border-orange-500 py-2.5 text-xs font-semibold text-orange-500"
            >
              Sign In
            </Button>

            <Button className="w-1/2 rounded-xl bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] py-2.5 text-xs font-semibold text-white">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
