import { ShieldCheck, Sparkles, Clock, UserCheck, CreditCard, Zap } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Premium Fleet' },
  { icon: ShieldCheck, title: 'Sanitized Vehicles' },
  { icon: Clock, title: '24×7 Customer Support' },
  { icon: UserCheck, title: 'Professional Service' },
  { icon: CreditCard, title: 'Affordable Pricing' },
  { icon: Zap, title: 'Instant Booking' },
];

export function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-sm text-primary">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-sm md:text-base text-dark group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
