import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import EnterpriseSolutions from '../components/home/EnterpriseSolutions';
import TechnologyStack from '../components/home/TechnologyStack';
import FeaturedProject from '../components/home/FeaturedProject';
import WhyChoose from '../components/home/WhyChoose';
import DevelopmentProcess from '../components/home/DevelopmentProcess';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';
import Footer from '../components/home/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.s4starttech.com/#organization',
      name: 'S4Start Technologies',
      url: 'https://www.s4starttech.com',
      description:
        'S4Start Technologies develops custom CRM, ERP, mobile applications, customer and dealer portals, workflow automation, analytics, and enterprise business software.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.s4starttech.com/#website',
      url: 'https://www.s4starttech.com',
      name: 'S4Start Technologies',
      publisher: {
        '@id': 'https://www.s4starttech.com/#organization',
      },
      inLanguage: 'en-IN',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Hero />
        <Services />
        <EnterpriseSolutions />
        <TechnologyStack />
        <FeaturedProject />
        <WhyChoose />
        <DevelopmentProcess />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}