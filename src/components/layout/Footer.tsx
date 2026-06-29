import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import logo from '../../assets/logo.JPEG';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Majestix Drive Logo" className="h-12 w-auto object-contain rounded-md shadow-sm" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Premium car rental service in Coimbatore offering well-maintained fleet of cars, SUVs, travellers, and buses for all your travel needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Fleet', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Self Drive Cars', 'Chauffeur Driven', 'Airport Transfers', 'Wedding Transportation', 'Corporate Travel'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:6381656491" className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-sm">+91 6381656491</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/916381656491" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-sm">1, Keeranatham Road, Sri Sakthi Nagar, Sahara City, Saravanampatti, Coimbatore</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Majestix Drive - Car Rentals. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
