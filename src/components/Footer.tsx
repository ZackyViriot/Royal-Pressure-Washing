import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-1/637424558_122102489763263468_4349248179243756201_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=hDhkTJ6rIzcQ7kNvwHS5rQM&_nc_oc=AdkUBW71xUKjJRVmin_Ghyreq6SNYEbcRB4j2MLvEnqk1oIb6Kcu8pdrfQCObizqtHxEFWBQabCU1K52G5-nX0UO&_nc_zt=24&_nc_ht=scontent-den2-1.xx&_nc_gid=MIcX2d5g1woOAA6dib-mbw&_nc_ss=8&oh=00_Afykqy2Vy9mHTvj0TgD64UqYlc2SpiuE7yYnc91UZoWcvA&oe=69AE8003" 
                alt="Royal Pressure Washing Logo" 
                className="h-10 w-10 rounded-full border border-gold object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-heading font-bold text-lg text-white">
                ROYAL <span className="text-gold">PRESSURE WASHING</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Keeping Dallas clean, one driveway at a time. Professional, reliable, and detail-oriented exterior cleaning services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Driveway Cleaning</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">House Washing</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sidewalk Cleaning</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Patio & Deck</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Commercial</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Dallas-Fort Worth, TX</li>
              <li>(555) 123-4567</li>
              <li>info@royalpressurewashing.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Royal Pressure Washing. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
