import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Sobre Nosotros', href: '#historia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}
          >
            Raíz
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-amber-700 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className={`flex items-center space-x-2 transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Carrito</span>
            </a>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-amber-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-amber-700 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Carrito</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
