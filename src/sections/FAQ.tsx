import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: 'Do you provide airport pickup and drop?',
    answer: 'Yes, we provide 24/7 airport transfer services for Coimbatore International Airport. You can pre-book your ride to ensure prompt service.'
  },
  {
    question: 'Can I book a car for outstation travel?',
    answer: 'Absolutely! We offer outstation car rentals. You can choose from our wide range of hatchbacks, sedans, and SUVs based on your travel needs.'
  },
  {
    question: 'Are professional drivers included in the rental?',
    answer: 'We offer both self-drive and chauffeur-driven options. Our chauffeur-driven cars come with highly professional, experienced, and verified drivers.'
  },
  {
    question: 'Do you provide Tempo Traveller rentals for group trips?',
    answer: 'Yes, we have 12 to 14 seater luxury Tempo Travellers perfect for family trips, corporate outings, and pilgrimages.'
  },
  {
    question: 'Can I book instantly via WhatsApp?',
    answer: 'Yes, booking via WhatsApp is the fastest way. Simply text us your requirements at +91 6381656491 and our team will confirm your booking in minutes.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg mb-8">Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
            <a href="https://wa.me/916381656491" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white text-primary border border-gray-200 px-6 py-3 rounded-full font-button font-bold hover:bg-gray-50 transition-colors shadow-sm">
              Ask on WhatsApp
            </a>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={clsx(
                  "bg-white rounded-2xl overflow-hidden transition-all duration-300 border",
                  openIndex === index ? "border-secondary shadow-md" : "border-gray-100 shadow-sm"
                )}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-heading font-semibold text-lg text-primary pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={clsx(
                      "w-5 h-5 text-secondary shrink-0 transition-transform duration-300",
                      openIndex === index ? "rotate-180" : ""
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
