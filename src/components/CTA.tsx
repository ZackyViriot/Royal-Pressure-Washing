import { ArrowRight, Phone } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const CTA = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Restore Your Property?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Get your free, no-obligation quote today and see why DFW trusts Royal Pressure Washing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-black font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </a>
            <a
              href="tel:+1234567890"
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/30 font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
