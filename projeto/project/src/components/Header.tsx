import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            TechAssist Pro
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-400 hover:text-amber-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-zinc-300 hover:text-amber-400 transition-colors duration-300"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-zinc-300 hover:text-amber-400 transition-colors duration-300"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-zinc-300 hover:text-amber-400 transition-colors duration-300"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-zinc-300 hover:text-amber-400 transition-colors duration-300"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-zinc-300 hover:text-amber-400 transition-colors duration-300"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-zinc-300 hover:text-amber-400 transition-colors duration-300"
              >
                Contato
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
