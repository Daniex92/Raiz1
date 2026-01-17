import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in tracking-tight">
          Raíz
        </h1>
        <p className="text-3xl md:text-4xl mb-4 animate-fade-in-delay-1 font-light">
          Artesanía Hecha a Mano
        </p>
        <p className="text-xl md:text-2xl mb-12 animate-fade-in-delay-2 text-white/90 font-light">
          Piezas únicas hechas con intención
        </p>
        <a
          href="#catalogo"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-delay-3"
        >
          Explorar Catálogo
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
