import { Home, Droplets, Footprints, Warehouse, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Driveway Cleaning",
      description: "Remove oil stains, tire marks, and grime to instantly boost your curb appeal with our deep-clean pressure washing."
    },
    {
      icon: Home,
      title: "House Washing (Soft Wash)",
      description: "Safe, low-pressure cleaning that removes mold and algae without damaging your siding, stucco, or paint."
    },
    {
      icon: Footprints,
      title: "Sidewalk & Walkway",
      description: "Eliminate slippery moss and dirt from your pathways, making them safe and welcoming for guests."
    },
    {
      icon: Sparkles,
      title: "Patio & Deck Cleaning",
      description: "Restore the natural beauty of your wood or stone outdoor living spaces, ready for your next gathering."
    },
    {
      icon: Warehouse,
      title: "Commercial Services",
      description: "Keep your business looking professional with storefront, parking lot, and building exterior cleaning."
    }
  ];

  return (
    <section id="services" className="py-24 bg-royal-blue-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Premium Cleaning Solutions</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use the right pressure and the best solutions for every surface, ensuring a deep clean without the damage.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="h-full">
              <FadeIn delay={index * 0.1}>
                <div className="group bg-dark/50 p-8 rounded-2xl border border-white/5 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 bg-royal-blue rounded-xl flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                    <service.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
