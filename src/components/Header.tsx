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
    <header className="fixed top-0 left-0 right-0 glass-effect border-b border-amber-400/20 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            TechAssist Pro
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-400 hover:text-amber-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex space-x-1">
            {['Início', 'Serviços', 'Contato'].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(
                    item === 'Início' ? 'inicio' : item === 'Serviços' ? 'servicos' : 'contato'
                  )}
                  className="px-4 py-2 text-zinc-300 hover:text-amber-400 transition-all duration-300 rounded-lg hover:bg-amber-400/10"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            {['Início', 'Serviços', 'Contato'].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(
                    item === 'Início' ? 'inicio' : item === 'Serviços' ? 'servicos' : 'contato'
                  )}
                  className="block w-full text-left px-4 py-2 text-zinc-300 hover:text-amber-400 transition-all duration-300 rounded-lg hover:bg-amber-400/10"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
