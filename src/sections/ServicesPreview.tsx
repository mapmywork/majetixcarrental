import { motion } from 'framer-motion';
import { Plane, Car, Calendar, MapPin, Building2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Car, title: 'Self Drive Cars', desc: 'Enjoy the freedom of driving yourself.' },
  { icon: Calendar, title: 'Long Term Rentals', desc: 'Flexible car rentals for a month or longer.' },
  { icon: Plane, title: 'Airport Transfers', desc: 'Punctual pickup and drop-off at the airport.' },
  { icon: MapPin, title: 'Outstation Trips', desc: 'Comfortable journeys for long-distance travel.' },
  { icon: Building2, title: 'Corporate Travel', desc: 'Reliable mobility solutions for businesses.' },
  { icon: Heart, title: 'Wedding Cars', desc: 'Luxury vehicles for your special day.' },
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">Our Premium Services</h2>
          <p className="text-gray-600 text-lg">We offer a comprehensive range of mobility solutions tailored to your specific needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:bg-primary group transition-colors duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <service.icon className="w-6 h-6 text-secondary group-hover:text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary group-hover:text-white mb-3 transition-colors">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-button font-bold transition-all shadow-lg hover:shadow-xl">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
