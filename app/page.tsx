import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { SearchSection } from './components/SearchSection';
import { CarFilter } from './components/CarFilter';
import { Brands } from './components/Brands';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PromoBanner } from './components/PromoBanner';
import { WhyUs } from './components/WhyUs';
import { HowItWorks } from './components/HowItWorks';
import { ExpertHelp } from './components/ExpertHelp';
import { Offers } from './components/Offers';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030705] text-white" dir="rtl">
      <Navbar />
      <Hero />
      <TrustBar />
      <SearchSection />
      <CarFilter />
      <Brands />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <WhyUs />
      <HowItWorks />
      <ExpertHelp />
      <Offers />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}