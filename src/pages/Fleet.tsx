import { motion } from 'framer-motion';
import { Users, Briefcase, Settings, Zap, CheckCircle2 } from 'lucide-react';


const fleet5Seater = [
  { name: 'Suzuki Swift', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800', type: 'Hatchback', trans: 'Manual', seats: 5, lug: 2, fuel: 'Petrol' },
  { name: 'Maruti Baleno', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', type: 'Premium Hatchback', trans: 'Manual', seats: 5, lug: 3, fuel: 'Petrol' },
  { name: 'Toyota Glanza', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800', type: 'Premium Hatchback', trans: 'Manual', seats: 5, lug: 3, fuel: 'Petrol' },
  { name: 'Maruti Fronx', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800', type: 'Compact SUV', trans: 'Manual', seats: 5, lug: 3, fuel: 'Petrol' },
  { name: 'Maruti Brezza', image: 'https://images.unsplash.com/photo-1563720225384-9c0f67922278?auto=format&fit=crop&q=80&w=800', type: 'Compact SUV', trans: 'Manual/Auto', seats: 5, lug: 3, fuel: 'Petrol' },
  { name: 'Tata Punch', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800', type: 'Compact SUV', trans: 'Manual', seats: 5, lug: 2, fuel: 'Petrol' },
  { name: 'Tata Tiago', image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&q=80&w=800', type: 'Hatchback', trans: 'Manual', seats: 5, lug: 2, fuel: 'Petrol' },
];

const fleet7Seater = [
  { name: 'Toyota Innova Crysta', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800', type: 'Premium SUV', trans: 'Manual/Auto', seats: 7, lug: 3, fuel: 'Diesel' },
  { name: 'Toyota Innova', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800', type: 'MUV', trans: 'Manual', seats: 7, lug: 3, fuel: 'Diesel' },
  { name: 'Maruti Ertiga', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', type: 'MUV', trans: 'Manual', seats: 7, lug: 3, fuel: 'Petrol/CNG' },
  { name: 'Tata Hexa', image: 'https://images.unsplash.com/photo-1563720225384-9c0f67922278?auto=format&fit=crop&q=80&w=800', type: 'SUV', trans: 'Manual', seats: 7, lug: 4, fuel: 'Diesel' },
  { name: 'Mahindra XUV700', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800', type: 'Premium SUV', trans: 'Auto', seats: 7, lug: 3, fuel: 'Diesel' },
];

const CarGrid = ({ cars, title, desc }: { cars: any[], title: string, desc: string }) => (
  <div className="mb-24">
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">{title}</h2>
      <p className="text-gray-600 text-lg">{desc}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
        >
          <div className="relative h-56 overflow-hidden bg-gray-100">
            <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary">
              {car.type}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">{car.name}</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Settings className="w-4 h-4 text-secondary" />
                <span>{car.trans}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4 text-secondary" />
                <span>{car.seats} Seats</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Briefcase className="w-4 h-4 text-secondary" />
                <span>{car.lug} Bags</span>
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
);

export default function Fleet() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-primary text-white pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Our Premium <span className="text-secondary">Fleet</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Discover our extensive range of meticulously maintained vehicles designed to provide the ultimate driving experience.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <CarGrid 
          title="5 Seater Premium Cars" 
          desc="Perfect for city drives, small families, and weekend getaways."
          cars={fleet5Seater} 
        />
        
        <CarGrid 
          title="7 Seater Luxury SUVs" 
          desc="Spacious, comfortable, and ideal for larger families and outstation trips."
          cars={fleet7Seater} 
        />

        <div className="mb-24 bg-white rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000" 
              alt="Tempo Traveller" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <div className="inline-block bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-full text-sm mb-6 w-max">
              12-14 Seater
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">Luxury Tempo Traveller</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience superior comfort on group journeys with our push-back seated Tempo Travellers. Perfect for family tours, corporate outings, and pilgrimages.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Group Tours', 'Corporate Travel', 'Family Trips', 'Pilgrimage Tours', 'Wedding Transportation', 'Airport Transfers'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium text-primary">{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://wa.me/916381656491" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-button font-bold text-lg transition-colors shadow-lg">
              Check Availability
            </a>
          </div>
        </div>

        <div className="bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row-reverse text-white">
          <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Bus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent lg:hidden" />
          </div>
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Premium Tourist Buses</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              For large groups, we offer highly comfortable, air-conditioned buses equipped with modern amenities for a safe and relaxing journey.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {['Corporate Events', 'School Trips', 'College Tours', 'Family Functions', 'Destination Weddings', 'Tourist Groups'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://wa.me/916381656491" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-button font-bold text-lg transition-colors">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
