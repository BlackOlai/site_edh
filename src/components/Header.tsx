import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-blue-600 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="">
            <img src="/logo.png" alt="Logo" className="h-16" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              className="text-white hover:text-yellow-500 transition-colors cursor-pointer"
            >
              Início
            </Link>
            <a href="#sobre" className="text-white hover:text-yellow-500 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-white hover:text-yellow-500 transition-colors">
              Serviços
            </a>
            <a href="#equipe" className="text-white hover:text-yellow-500 transition-colors">
              Equipe
            </a>
            <a href="#contato" className="text-white hover:text-yellow-500 transition-colors">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-up">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-black hover:text-primary transition-colors" onClick={toggleMenu}>
                Início
              </a>
              <a href="#sobre" className="text-black hover:text-primary transition-colors" onClick={toggleMenu}>
                Sobre
              </a>
              <a href="#servicos" className="text-black hover:text-primary transition-colors" onClick={toggleMenu}>
                Serviços
              </a>
              <a href="#equipe" className="text-black hover:text-primary transition-colors" onClick={toggleMenu}>
                Equipe
              </a>
              <a href="#contato" className="text-black font-bold hover:text-primary transition-colors hover:scale-110 hover:shadow-md rounded-full" onClick={toggleMenu}>
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};