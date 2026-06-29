import { Hero } from '../sections/Hero';
import { FleetPreview } from '../sections/FleetPreview';
import { ServicesPreview } from '../sections/ServicesPreview';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { BookingProcess } from '../sections/BookingProcess';
import { Reviews } from '../sections/Reviews';
import { FAQ } from '../sections/FAQ';
import { ContactMap } from '../sections/ContactMap';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FleetPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <BookingProcess />
      <Reviews />
      <FAQ />
      <ContactMap />
    </div>
  );
}
