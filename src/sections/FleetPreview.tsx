import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Settings, Zap } from 'lucide-react';
import tempoImage from '../assets/22.jpeg';
const previewCars = [
  {
    name: 'Toyota Innova Crysta',
    image: 'https://cdn.carhp.in/toyota/toyota_innova_hycross_platinum_white_pearl.jpg?format=webp&width=800&q=75',
    type: '7 Seater SUV',
    transmission: 'Automatic',
    seats: 7,
    luggage: 3,
    fuel: 'Diesel'
  },
  {
    name: 'Suzuki Swift',
    image: 'https://media.umbraco.io/suzuki-gb/smtlqp3h/image53.png',
    type: '5 Seater Hatchback',
    transmission: 'Manual',
    seats: 5,
    luggage: 2,
    fuel: 'Petrol'
  },
  {
    name: 'Luxury Tempo Traveller',
    image: tempoImage,
    type: '12-14 Seater',
    transmission: 'Manual',
    seats: 14,
    luggage: 6,
    fuel: 'Diesel',
    objectPosition: 'object-bottom'
  }
];

export function FleetPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">Our Premium Fleet</h2>
            <p className="text-gray-600 text-lg">Choose from our wide range of well-maintained vehicles for any occasion.</p>
          </div>
          <Link to="/fleet" className="mt-6 md:mt-0 text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2">
            View All Vehicles &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(19,93,255,0.1)] transition-all duration-300 group"
            >
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img src={car.image} alt={car.name} className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${car.objectPosition || 'object-center'}`} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary">
                  {car.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">{car.name}</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Settings className="w-4 h-4 text-secondary" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-secondary" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    <span>{car.luggage} Bags</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4 text-secondary" />
                    <span>{car.fuel}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="tel:6381656491" className="flex-1 bg-gray-50 hover:bg-gray-100 text-primary text-center py-3 rounded-xl font-button font-semibold transition-colors">
                    Call Now
                  </a>
                  <a href="https://wa.me/916381656491" target="_blank" rel="noreferrer" className="flex-1 bg-primary hover:bg-secondary text-white text-center py-3 rounded-xl font-button font-semibold transition-colors">
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
