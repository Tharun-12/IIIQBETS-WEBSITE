import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the iiiQbets website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: '2. Services',
    content: `iiiQbets provides digital transformation and technology solutions including but not limited to business process reengineering, digital infrastructure, digital marketing, data analytics, cloud services, application development, and enterprise software products. Specific service terms may be defined in separate agreements.`,
  },
  {
    title: '3. Intellectual Property',
    content: `All content on this website, including text, graphics, logos, and software, is the property of iiiQbets or its content providers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without prior written permission.`,
  },
  {
    title: '4. User Conduct',
    content: `You agree to use our website and services only for lawful purposes. You shall not misuse the website, attempt to gain unauthorized access, or interfere with the normal operation of the website.`,
  },
  {
    title: '5. Disclaimer of Warranties',
    content: `Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the website will be error-free, uninterrupted, or free of harmful components.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `iiiQbets shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use our website or services.`,
  },
  {
    title: '7. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of third-party websites. You access them at your own risk.`,
  },
  {
    title: '8. Changes to Terms',
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of the website constitutes acceptance of the modified terms.`,
  },
  {
    title: '9. Governing Law',
    content: `These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be subject to the jurisdiction of the appropriate courts.`,
  },
  {
    title: '10. Contact',
    content: `For questions about these Terms and Conditions, please contact us at contact@iiiqbets.com or at our office address: Skyline Beverly Park, D 402, Amruthahalli Main Road, Bangalore – 560092.`,
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions | iiiQbets"
        description="Read the terms and conditions governing your use of the iiiQbets website and services."
        canonical="https://iiiqbets.com/terms-and-conditions"
        ogTitle="Terms & Conditions | iiiQbets"
        ogDescription="The terms governing use of iiiQbets website and services."
      />

      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms govern your use of our website and services. Please read them carefully."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="iiq-container-narrow">
          <p className="mb-10 text-sm text-graytext">
            <strong>Legal Entity:</strong> KRIKA MKB Corporation Private Limited
            <br />
            <strong>Last Updated:</strong> October 2026
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="iiq-legal-section">
                <h2 className="text-xl font-bold text-navy-deep">{section.title}</h2>
                <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-graytext">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-navy-deep/10 bg-offwhite p-6">
            <p className="text-sm text-graytext">
              This document is provided as a template and should be reviewed by your legal team
              before publication. Please consult with legal counsel to ensure compliance with
              applicable laws and regulations in your jurisdiction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
