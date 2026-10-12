import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';

const sections = [
  {
    title: '1. Introduction',
    content: `This Privacy Policy describes how iiiQbets ("we," "us," or "our"), operating under KRIKA MKB Corporation Private Limited, collects, uses, and protects information when you visit our website or use our services. By accessing our website, you agree to the practices described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    content: `We may collect the following types of information when you interact with our website or services:\n\n• Personal information you provide directly, such as your name, email address, phone number, and company name when you submit forms or enquiries.\n• Non-personal information collected automatically, such as browser type, device information, and usage data through cookies and similar technologies.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect for the following purposes:\n\n• To respond to your enquiries and provide requested services\n• To communicate with you about our services and offerings\n• To improve our website and user experience\n• To comply with legal obligations and protect our rights`,
  },
  {
    title: '4. Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting business, subject to confidentiality obligations.`,
  },
  {
    title: '5. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure.`,
  },
  {
    title: '6. Cookies',
    content: `Our website may use cookies to enhance your browsing experience. You can control cookies through your browser settings, though disabling cookies may affect some website functionality.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications at any time by contacting us.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have questions about this Privacy Policy, please contact us at contact@iiiqbets.com or at our office address: Skyline Beverly Park, D 402, Amruthahalli Main Road, Bangalore – 560092.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | iiiQbets"
        description="Read the iiiQbets privacy policy to understand how we collect, use, and protect your information."
        canonical="https://iiiqbets.com/privacy-policy"
        ogTitle="Privacy Policy | iiiQbets"
        ogDescription="How iiiQbets collects, uses, and protects your information."
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy describes how we collect, use, and protect your information. Please review it carefully."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
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
