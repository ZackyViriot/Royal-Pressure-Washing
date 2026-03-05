import { CheckCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const WhyChooseUs = () => {
  const points = [
    "Professional-Grade Equipment",
    "Safe Soft-Wash Techniques",
    "Reliable & On-Time",
    "Detail-Oriented Service",
    "Serving All of DFW",
    "Fully Insured & Bonded"
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00C2E0 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-royal-blue font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">The Royal Standard</h3>
            <p className="text-gray-300 text-lg mb-8">
              We don't cut corners. Our commitment to quality and customer satisfaction sets us apart from the competition. 
              Experience the difference of a truly professional exterior cleaning service.
            </p>
            <a
              href="#contact"
              className="inline-block bg-royal-blue text-black font-bold py-3 px-8 rounded-full hover:bg-gold hover:text-black transition-colors"
            >
              Get Started Today
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-royal-blue shrink-0" size={20} />
                    <span className="text-white font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
