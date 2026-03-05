import { Shield, Award, ThumbsUp } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-blue/5 skew-x-12 transform translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 rounded-2xl transform -rotate-2 blur-lg" />
              <img
                src="https://images.unsplash.com/photo-1581578731117-104f2a412729?q=80&w=1974&auto=format&fit=crop"
                alt="Professional Pressure Washing"
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-royal-blue p-6 rounded-xl border border-white/10 shadow-xl hidden md:block">
                <p className="text-gold font-bold text-4xl mb-1">5+</p>
                <p className="text-white text-sm uppercase tracking-wider">Years of<br />Excellence</p>
              </div>
            </div>
          </FadeIn>

          {/* Content Side */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Elite-Level Exterior Cleaning for DFW
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Royal Pressure Washing delivers elite-level exterior cleaning services throughout the Dallas–Fort Worth area. 
                We combine professional-grade equipment, expert training, and meticulous attention to detail to restore and protect your property.
                We don't just clean; we care for your home as if it were our own.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Shield, text: "Fully Insured" },
                  { icon: Award, text: "Professionally Trained" },
                  { icon: ThumbsUp, text: "100% Satisfaction" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
                    <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center mb-3 text-gold">
                      <item.icon size={24} />
                    </div>
                    <span className="font-semibold text-white text-sm">{item.text}</span>
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
