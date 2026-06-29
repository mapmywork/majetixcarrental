import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Rahul R',
    image: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    text: 'Excellent service! The Innova Crysta was very clean and well-maintained. The driver was professional and arrived on time. Highly recommended for family trips.',
    time: '2 weeks ago'
  },
  {
    name: 'Priya K',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'Booked a Swift for a weekend getaway. The booking process was seamless via WhatsApp. Transparent pricing and great condition of the car.',
    time: '1 month ago'
  },
  {
    name: 'Senthil Kumar',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Used their Tempo Traveller for a corporate outing. Very spacious and comfortable. The AC was perfect. Will definitely book again.',
    time: '2 months ago'
  },
  {
    name: 'Karthik S',
    image: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
    text: 'Best car rental service in Coimbatore. I travel often for business and Majestix always provides reliable airport drops.',
    time: '3 weeks ago'
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">Don't just take our word for it. Read what our happy customers have experienced.</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
                <Quote className="absolute top-8 right-8 w-10 h-10 text-secondary/10" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-heading font-bold text-primary">{review.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 italic flex-grow">"{review.text}"</p>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-400">{review.time}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
