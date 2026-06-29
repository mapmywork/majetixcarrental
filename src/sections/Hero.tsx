import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Premium Car Rentals In <span className="text-secondary">Coimbatore</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
          >
            Drive with confidence using our well-maintained fleet of cars, SUVs, travellers, and buses for family trips, business travel, airport transfers, weddings, and outstation journeys.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/fleet"
              className="group flex items-center justify-center gap-2 bg-secondary hover:bg-white text-white hover:text-primary px-8 py-4 rounded-full font-button font-bold text-lg transition-all duration-300 shadow-[0_8px_30px_rgba(19,93,255,0.3)]"
            >
              <span>Explore Fleet</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:6381656491"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-button font-bold text-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-sm font-medium tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-12 rounded-full bg-white/20 relative overflow-hidden"
        >
          <motion.div 
            className="w-full h-1/2 bg-secondary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
