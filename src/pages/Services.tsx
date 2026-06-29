import { motion } from 'framer-motion';
import { Plane, Car, Calendar, Users, MapPin, Building2, Heart, Bus, PhoneCall } from 'lucide-react';

const allServices = [
  { icon: Car, title: 'Self Drive Cars', desc: 'Enjoy the freedom of driving yourself with our well-maintained self-drive options. Perfect for weekend getaways and personal errands.' },
  { icon: Calendar, title: 'Long Term Rentals', desc: 'Flexible car rentals for a month or longer. Enjoy discounted rates and full maintenance support for extended use.' },
  { icon: Plane, title: 'Airport Pickup & Drop', desc: 'Punctual and reliable airport transfer services to and from Coimbatore International Airport. Available 24/7.' },
  { icon: MapPin, title: 'Outstation Trips', desc: 'Comfortable journeys for long-distance travel. We offer hatchbacks, sedans, and SUVs for your outstation travel needs.' },
  { icon: Heart, title: 'Family Tours', desc: 'Spacious vehicles including Innova Crysta and Ertiga for comfortable and memorable family vacations.' },
  { icon: Building2, title: 'Corporate Travel', desc: 'Reliable mobility solutions for businesses, including employee transportation and executive travel services.' },
  { icon: Heart, title: 'Wedding Transportation', desc: 'Make your special day even more memorable with our luxury wedding car rentals and guest transportation.' },
  { icon: MapPin, title: 'Tourist Packages', desc: 'Customized tourist packages covering popular destinations like Ooty, Kodaikanal, Valparai, and Munnar.' },
  { icon: Users, title: 'Group Travel', desc: 'Convenient travel solutions for large groups, educational tours, and team outings.' },
  { icon: Bus, title: 'Traveller Rental', desc: '12 to 14 seater luxury Tempo Travellers equipped with push-back seats and premium AC.' },
  { icon: Bus, title: 'Bus Rental', desc: 'Premium tourist buses for corporate events, school trips, and large destination weddings.' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-primary text-white pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Our <span className="text-secondary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Comprehensive mobility solutions tailored to your unique travel requirements.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <service.icon className="w-8 h-8 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
              
              <a href="https://wa.me/916381656491" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                <PhoneCall className="w-4 h-4" />
                <span>Book Service</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
