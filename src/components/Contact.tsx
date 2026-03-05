import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-royal-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <FadeIn>
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Get Your Free Quote</h3>
            <p className="text-gray-400 mb-10 text-lg">
              Fill out the form, and we'll get back to you within 24 hours with a custom quote for your property.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Phone</h4>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email</h4>
                  <p className="text-gray-400">info@royalpressurewashing.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Service Area</h4>
                  <p className="text-gray-400">Serving Dallas, Fort Worth, and surrounding areas</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            <form className="bg-dark p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-royal-blue-light border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-royal-blue-light border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-royal-blue-light border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                  <select
                    id="service"
                    className="w-full bg-royal-blue-light border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="driveway">Driveway Cleaning</option>
                    <option value="house">House Washing</option>
                    <option value="roof">Roof Cleaning</option>
                    <option value="commercial">Commercial Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-royal-blue-light border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-gold hover:bg-gold-hover text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
