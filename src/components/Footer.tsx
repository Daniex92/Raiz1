import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-amber-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Raíz</h3>
            <p className="text-amber-200 leading-relaxed">
              Artesanía hecha a mano con amor, tradición y dedicación desde el corazón.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#historia"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-amber-200">info@raizartesania.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-amber-200">+34 123 456 789</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-amber-200">
                  Calle Artesana 15, Madrid, España
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-amber-200 mt-6 text-sm leading-relaxed">
              Comparte tu experiencia con nosotros usando #RaízArtesanía
            </p>
          </div>
        </div>

        <div className="border-t border-amber-900 pt-8 text-center">
          <p className="text-amber-300">
            &copy; {new Date().getFullYear()} Raíz Artesanía. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
