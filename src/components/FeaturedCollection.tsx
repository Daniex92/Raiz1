import { useEffect, useRef, useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Jarrón de Cerámica',
    description: 'Pieza única hecha a mano con arcilla natural',
    image: 'https://images.pexels.com/photos/6044267/pexels-photo-6044267.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$45',
  },
  {
    id: 2,
    name: 'Cuenco Artesanal',
    description: 'Diseño orgánico con acabado natural',
    image: 'https://images.pexels.com/photos/5624088/pexels-photo-5624088.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$32',
  },
  {
    id: 3,
    name: 'Taza de Gres',
    description: 'Perfecta para café o té, hecha con amor',
    image: 'https://images.pexels.com/photos/6044268/pexels-photo-6044268.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$28',
  },
  {
    id: 4,
    name: 'Plato Decorativo',
    description: 'Acabado rústico con detalles únicos',
    image: 'https://images.pexels.com/photos/4226880/pexels-photo-4226880.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$38',
  },
  {
    id: 5,
    name: 'Set de Tazas',
    description: 'Colección de dos tazas hechas a mano',
    image: 'https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$52',
  },
  {
    id: 6,
    name: 'Florero Rústico',
    description: 'Textura natural y diseño único',
    image: 'https://images.pexels.com/photos/6044318/pexels-photo-6044318.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$42',
  },
];

export default function FeaturedCollection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="catalogo" className="py-24 px-6 bg-stone-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
            Colección Destacada
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada pieza cuenta una historia y lleva la huella del artesano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-700">
                      {product.price}
                    </span>
                    <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
