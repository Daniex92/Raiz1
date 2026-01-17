import { useEffect, useRef, useState } from 'react';
import { Heart, Leaf, Sparkles } from 'lucide-react';

export default function BrandStory() {
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
    <section id="historia" className="py-24 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/5624104/pexels-photo-5624104.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Artesana trabajando"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              En <span className="font-bold text-amber-800">Raíz</span>, cada pieza
              nace de la conexión profunda con la tierra y las manos que la moldean.
              Nuestra tradición artesanal se transmite de generación en generación,
              creando objetos que no solo son funcionales, sino que llevan el alma
              del artesano.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Trabajamos con materiales naturales y técnicas ancestrales, combinando
              la sabiduría del pasado con la sensibilidad contemporánea. Cada
              imperfección es una firma, cada textura cuenta una historia.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Hecho con Amor
                  </h3>
                  <p className="text-gray-600">
                    Cada pieza recibe atención dedicada y cuidado artesanal
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Leaf className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Materiales Naturales
                  </h3>
                  <p className="text-gray-600">
                    Arcilla, madera y fibras orgánicas de origen sostenible
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    Piezas Únicas
                  </h3>
                  <p className="text-gray-600">
                    No encontrarás dos piezas exactamente iguales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
