import { motion } from 'framer-motion';
import { ContactMap } from '../sections/ContactMap';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-primary text-white pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Contact <span className="text-secondary">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            We're here to help you 24/7. Reach out for bookings, quotes, or any inquiries.
          </motion.p>
        </div>
      </div>

      <ContactMap />
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Need a Custom Quote?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Planning a large event, corporate travel, or a multi-day outstation trip? Contact us directly and our team will provide a tailored package with the best rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6381656491" className="bg-white hover:bg-gray-100 text-primary border border-gray-200 px-8 py-4 rounded-full font-button font-bold text-lg transition-colors shadow-sm">
                Call +91 6381656491
              </a>
              <a href="https://wa.me/916381656491" target="_blank" rel="noreferrer" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-button font-bold text-lg transition-colors shadow-lg">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
