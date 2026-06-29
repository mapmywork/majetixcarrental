import { motion } from 'framer-motion';
import { WhyChooseUs } from '../sections/WhyChooseUs';

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-primary text-white pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            About <span className="text-secondary">Majestix Drive</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Coimbatore's most trusted premium car rental and mobility partner.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000"
              alt="Majestix Drive Fleet" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Redefining Mobility in Coimbatore</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At Majestix Drive, we believe that the journey is just as important as the destination. Founded with a vision to provide world-class mobility solutions, we have grown to become Coimbatore's premier car rental service.
              </p>
              <p>
                Our fleet comprises the latest models of hatchbacks, sedans, SUVs, Tempo Travellers, and luxury buses, meticulously maintained to ensure safety, comfort, and reliability.
              </p>
              <p>
                Whether you need a self-drive car for a weekend getaway, a chauffeur-driven luxury vehicle for a wedding, or a comfortable bus for a corporate event, Majestix Drive delivers excellence at every mile.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-4xl font-heading font-bold text-secondary mb-2">50+</h4>
                <p className="text-gray-600 font-medium">Premium Vehicles</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-4xl font-heading font-bold text-secondary mb-2">10k+</h4>
                <p className="text-gray-600 font-medium">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
    </div>
  );
}
