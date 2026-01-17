import { useEffect, useRef, useState } from 'react';
import { Palette, MessageCircle, Package } from 'lucide-react';

export default function CustomOrders() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-amber-50 to-stone-100" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
            Encargos Personalizados
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Creamos la pieza de tus sueños. Trabajamos contigo para dar vida a tus
            ideas, adaptándonos a tus necesidades y preferencias únicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Palette,
              title: 'Diseño Único',
              description:
                'Colaboramos contigo para crear un diseño que refleje tu estilo y visión personal',
            },
            {
              icon: MessageCircle,
              title: 'Comunicación Directa',
              description:
                'Mantenemos contacto constante durante todo el proceso creativo',
            },
            {
              icon: Package,
              title: 'Entrega Cuidadosa',
              description:
                'Empaquetamos cada pieza con amor y la entregamos de forma segura',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <item.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src="https://images.pexels.com/photos/5623108/pexels-photo-5623108.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Proceso artesanal"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Tienes una idea en mente?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Cuéntanos tu visión y la convertiremos en una pieza única que atesorarás
                para siempre
              </p>
              <a
                href="#contacto"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Solicitar Encargo Personalizado
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
