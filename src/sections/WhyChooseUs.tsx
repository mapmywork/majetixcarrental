import { motion } from 'framer-motion';
import { Shield, Sparkles, IndianRupee, Headphones, CalendarCheck, Map } from 'lucide-react';

const reasons = [
  { icon: Sparkles, title: 'Premium Fleet', desc: 'Well-maintained, latest model vehicles.' },
  { icon: IndianRupee, title: 'Affordable Pricing', desc: 'Transparent charges with no hidden fees.' },
  { icon: Shield, title: 'Clean & Sanitized', desc: 'Highest standards of hygiene.' },
  { icon: Headphones, title: '24×7 Support', desc: 'Always available to assist you.' },
  { icon: CalendarCheck, title: 'Easy Booking', desc: 'Seamless booking process via call or WhatsApp.' },
  { icon: Map, title: 'Doorstep Pickup', desc: 'Convenient vehicle delivery to your location.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                Why Choose <span className="text-secondary">Majestix</span> Drive
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We are committed to providing the highest quality car rental experience in Coimbatore. Our focus on vehicle maintenance, customer service, and transparent pricing sets us apart as a premium mobility partner.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <reason.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-primary">{reason.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury Car Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex gap-2 mb-2">
                    {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-5 h-5 text-accent" />)}
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Experience True Luxury</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
