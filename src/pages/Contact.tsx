import { useState, type FormEvent } from 'react';
import SEO from '@/components/common/SEO';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import { Mail, Phone, MapPin, Building, Send, CheckCircle, Loader2 } from 'lucide-react';

const serviceOptions = [
  'Digital Transformation',
  'Business Process Reengineering',
  'Digital Infrastructure',
  'Digital Marketing',
  'Data Analytics & BI',
  'Cloud Services',
  'Application Development',
  'ERP',
  'CRM',
  'POS',
  'SFA',
  'Other',
];

const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+'];

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceInterestedIn: string;
  companySize: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@iiiqbets.com',
    href: 'mailto:contact@iiiqbets.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 80411 19030\n+91 87929 20129',
    href: 'tel:+918041119030',
  },
];

const officeLocations = [
  {
    title: 'India',
    address: 'Skyline Beverly Park, D 402, Amruthahalli Main Road, Amruthahalli, Bangalore – 560092',
  },
  {
    title: 'Development Center',
    address: '120 Newport Center Dr, Newport Beach, CA 92660, USA',
  },
  {
    title: 'Canada',
    address: '118-2945 Pembina Hwy, Winnipeg, Manitoba R3T 3R1',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterestedIn: '',
    companySize: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Replaceable API function — no backend is currently connected.
    // When a backend is available, replace this with a real API call.
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  const inputClass = (hasError?: string) =>
    `iiq-contact-form__input w-full rounded-lg border px-4 py-3 text-sm text-darktext transition-colors focus:outline-none focus:ring-2 focus:ring-cyan/30 ${
      hasError
        ? 'border-red-400 bg-red-50/50'
        : 'border-navy-deep/15 bg-white focus:border-blue-bright'
    }`;

  return (
    <>
      <SEO
        title="Contact Us | iiiQbets"
        description="Get in touch with iiiQbets to discuss your digital transformation goals. Email, phone, and office locations in India, USA, and Canada."
        canonical="https://iiiqbets.com/contact"
        ogTitle="Let's Talk About Your Business | iiiQbets"
        ogDescription="Reach out to discuss your digital transformation goals. Our team is ready to help."
      />

      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Business"
        description="Reach out to discuss your digital transformation goals. Our team is ready to help you navigate your technology journey."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="iiq-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-2xl border border-navy-deep/8 bg-white p-6 sm:p-8">
                  {status === 'success' ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                      <h2 className="mt-6 text-2xl font-bold text-navy-deep">Thank You!</h2>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-graytext">
                        Your enquiry has been received. Our team will get back to you within 24 hours
                        to discuss your project.
                      </p>
                      <button
                        onClick={() => {
                          setStatus('idle');
                          setFormData({
                            fullName: '',
                            companyName: '',
                            email: '',
                            phone: '',
                            serviceInterestedIn: '',
                            companySize: '',
                            message: '',
                          });
                        }}
                        className="mt-6 rounded-lg border border-navy-deep/15 px-6 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-offwhite"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="iiq-contact-form space-y-5" noValidate>
                      <h2 className="text-xl font-bold text-navy-deep">Send Us a Message</h2>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-darktext">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={inputClass(errors.fullName)}
                            placeholder="John Doe"
                            aria-required="true"
                            aria-invalid={!!errors.fullName}
                          />
                          {errors.fullName && (
                            <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium text-darktext">
                            Company Name
                          </label>
                          <input
                            id="companyName"
                            name="companyName"
                            type="text"
                            value={formData.companyName}
                            onChange={handleChange}
                            className={inputClass()}
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-darktext">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass(errors.email)}
                            placeholder="john@company.com"
                            aria-required="true"
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-darktext">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass()}
                            placeholder="+91 00000 00000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="serviceInterestedIn" className="mb-1.5 block text-sm font-medium text-darktext">
                            Service Interested In
                          </label>
                          <select
                            id="serviceInterestedIn"
                            name="serviceInterestedIn"
                            value={formData.serviceInterestedIn}
                            onChange={handleChange}
                            className={inputClass()}
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="companySize" className="mb-1.5 block text-sm font-medium text-darktext">
                            Company Size
                          </label>
                          <select
                            id="companySize"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className={inputClass()}
                          >
                            <option value="">Select size</option>
                            {companySizes.map((s) => (
                              <option key={s} value={s}>{s} employees</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-darktext">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={inputClass(errors.message)}
                          placeholder="Tell us about your project or requirements..."
                          aria-required="true"
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-navy-light px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-bright disabled:opacity-60"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-graytext">
                        By submitting this form, you agree to be contacted by iiiQbets regarding
                        your enquiry. We respect your privacy and will not share your information.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-5">
              <div className="space-y-6">
                {/* Quick contact */}
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Reveal key={info.label}>
                      <div className="flex items-start gap-4 rounded-xl border border-navy-deep/8 bg-offwhite p-5">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                          <info.icon className="h-5 w-5 text-blue-bright" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-graytext">{info.label}</div>
                          <a href={info.href} className="text-sm font-medium text-navy-deep hover:text-blue-bright whitespace-pre-line">
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Legal name */}
                <Reveal delay={0.1}>
                  <div className="rounded-xl border border-navy-deep/8 bg-offwhite p-5">
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-blue-bright" />
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-graytext">Legal Name</div>
                        <div className="text-sm font-medium text-navy-deep">KRIKA MKB Corporation Private Limited</div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Office locations */}
                <div className="space-y-4">
                  {officeLocations.map((office, i) => (
                    <Reveal key={office.title} delay={0.15 + i * 0.05}>
                      <div className="flex items-start gap-4 rounded-xl border border-navy-deep/8 bg-offwhite p-5">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-bright/10">
                          <MapPin className="h-5 w-5 text-blue-bright" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-graytext">{office.title}</div>
                          <p className="text-sm text-darktext">{office.address}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
