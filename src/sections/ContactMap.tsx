import { MapPin, Phone, Clock } from 'lucide-react';

export function ContactMap() {
  return (
    <section className="py-0 relative">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
        
        {/* Contact Info */}
        <div className="lg:w-1/3 bg-primary text-white p-10 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-heading font-bold mb-8">Get In Touch</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Our Location</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  1, Keeranatham Road, Sri Sakthi Nagar, Sahara City, Saravanampatti, Coimbatore, Tamil Nadu 641035
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Call Us</h4>
                <a href="tel:6381656491" className="text-gray-300 text-sm hover:text-white transition-colors block">
                  +91 6381656491
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Working Hours</h4>
                <p className="text-gray-300 text-sm">24/7 Available for Bookings</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex gap-4">
            <a href="tel:6381656491" className="flex-1 bg-white hover:bg-gray-100 text-primary text-center py-3 rounded-xl font-button font-bold transition-colors">
              Call Now
            </a>
            <a href="https://wa.me/916381656491" target="_blank" rel="noreferrer" className="flex-1 bg-secondary hover:bg-secondary/90 text-white text-center py-3 rounded-xl font-button font-bold transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
        
        {/* Map */}
        <div className="lg:w-2/3 h-[400px] lg:h-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6599292850383!2d76.9945391!3d11.0827988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7127e9974bb%3A0xb35a0ce8e82ef525!2sKeeranatham%20Rd%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Majestix Drive Location"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
