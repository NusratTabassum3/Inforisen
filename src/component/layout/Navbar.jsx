import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "../../data/navigation";
import Button from "../common/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex h-8 w-12 items-center justify-center rounded-md bg-white text-[9px] font-bold text-orange-500 shadow-sm"
        >
          LOGO
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-medium text-gray-700 transition hover:text-orange-500"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" className="px-4 py-2 text-[10px]">
            Sign In
          </Button>

          <Button className="px-4 py-2 text-[10px]">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md bg-white p-2 text-gray-700 shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-4 rounded-xl bg-white p-5 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-700 hover:text-orange-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex gap-2">
            <Button variant="outline" className="flex-1">
              Sign In
            </Button>

            <Button className="flex-1">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
