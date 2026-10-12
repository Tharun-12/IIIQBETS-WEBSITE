import SEO from '@/components/common/SEO';
import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/home/StatsStrip';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import ProductsPreview from '@/components/home/ProductsPreview';
import DTaaS from '@/components/home/DTaaS';
import TechnologyPreview from '@/components/home/TechnologyPreview';
import IndustriesPreview from '@/components/home/IndustriesPreview';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import BusinessImpact from '@/components/home/BusinessImpact';
import DTMessage from '@/components/home/DTMessage';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';
import ContactPreview from '@/components/home/ContactPreview';

export default function Home() {
  return (
    <>
      <SEO
        title="iiiQbets | Digital Transformation & Technology Solutions"
        description="iiiQbets helps businesses accelerate digital transformation through technology solutions, ERP, CRM, data analytics, cloud services, application development, digital infrastructure, and business intelligence."
        canonical="https://iiiqbets.com/"
        ogTitle="iiiQbets — Powering Digital Transformation. Driving Business Growth."
        ogDescription="Technology solutions that help businesses automate, integrate, analyze, optimize, and scale."
      />
      <Hero />
      <StatsStrip />
      <AboutPreview />
      <ServicesPreview />
      <ProductsPreview />
      <DTaaS />
      <TechnologyPreview />
      <IndustriesPreview />
      <ProcessTimeline />
      <BusinessImpact />
      <DTMessage />
      <Testimonials />
      <FinalCTA />
      <ContactPreview />
    </>
  );
}
