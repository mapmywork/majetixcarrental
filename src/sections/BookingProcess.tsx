import { motion } from 'framer-motion';
import { Car, PhoneCall, CheckCircle, Smile } from 'lucide-react';

const steps = [
  { icon: Car, title: 'Choose Vehicle', desc: 'Select from our wide range of premium cars.' },
  { icon: PhoneCall, title: 'Call or WhatsApp', desc: 'Contact us to check availability.' },
  { icon: CheckCircle, title: 'Confirm Booking', desc: 'Simple verification and confirmation.' },
  { icon: Smile, title: 'Enjoy Your Ride', desc: 'Experience a smooth and comfortable journey.' }
];

export function BookingProcess() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Simple Booking Process</h2>
          <p className="text-gray-300 text-lg">Get on the road in just four easy steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 relative z-10 border border-secondary/30 backdrop-blur-md">
                <step.icon className="w-8 h-8 text-secondary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-secondary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
