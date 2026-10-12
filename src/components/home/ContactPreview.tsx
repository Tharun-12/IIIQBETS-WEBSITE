import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';

export default function ContactPreview() {
  return (
    <section className="iiq-contact-preview bg-white py-20 sm:py-28">
      <div className="iiq-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title={<>Let's Talk About <span className="text-blue-bright">Your Business</span></>}
              subtitle="Reach out to discuss your digital transformation goals. Our team is ready to help you navigate your technology journey."
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-navy-deep/8 bg-offwhite p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                  <Mail className="h-5 w-5 text-blue-bright" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-graytext">Email</div>
                  <a href="mailto:contact@iiiqbets.com" className="text-sm font-medium text-navy-deep hover:text-blue-bright">
                    contact@iiiqbets.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-navy-deep/8 bg-offwhite p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                  <Phone className="h-5 w-5 text-blue-bright" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-graytext">Phone</div>
                  <a href="tel:+918041119030" className="block text-sm font-medium text-navy-deep hover:text-blue-bright">+91 80411 19030</a>
                  <a href="tel:+918792920129" className="block text-sm font-medium text-navy-deep hover:text-blue-bright">+91 87929 20129</a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-navy-deep/8 bg-offwhite p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                  <MapPin className="h-5 w-5 text-blue-bright" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-graytext">India Office</div>
                  <p className="text-sm text-darktext">
                    Skyline Beverly Park, D 402, Amruthahalli Main Road, Amruthahalli, Bangalore – 560092
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-navy-deep p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-white">
                Start Your Transformation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Send us a message and our team will get back to you within 24 hours to discuss your project.
              </p>
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-3.5 text-sm font-semibold text-navy-deep transition-all duration-300 hover:bg-white"
              >
                Send Enquiry
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
