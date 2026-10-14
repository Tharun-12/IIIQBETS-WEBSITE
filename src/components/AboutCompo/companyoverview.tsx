import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import Button from '@/components/common/Button';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------- Text column: staggered fade-up ---------- */
      const textItems = textColRef.current?.querySelectorAll('[data-animate]');
      if (textItems?.length) {
        gsap.from(textItems, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.1,
          scrollTrigger: {
            trigger: textColRef.current,
            start: 'top 75%',
            once: true,
            invalidateOnRefresh: true,
          },
        });
      }

      /* ---------- Image wrapper: fade + slide in ---------- */
      if (imageWrapRef.current) {
        gsap.from(imageWrapRef.current, {
          opacity: 0,
          x: 40,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: 'top 80%',
            once: true,
            invalidateOnRefresh: true,
          },
        });
      }

      /* ---------- Image inner: zoom-out on scroll-in ---------- */
      if (imgInnerRef.current) {
        gsap.fromTo(
          imgInnerRef.current,
          { scale: 1.15 },
          {
            scale: 1,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imgInnerRef.current,
              start: 'top 85%',
              once: true,
              invalidateOnRefresh: true,
            },
          }
        );

        /* ---------- Continuous parallax on the same inner element ---------- */
        gsap.to(imgInnerRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    // Refresh ScrollTrigger after fonts/images load
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28">
      <div className="iiq-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* -------- Left: Text -------- */}
          <div ref={textColRef}>
            <div data-animate>
              <SectionHeading
                eyebrow="Company Overview"
                title={
                  <>
                    Technology Expertise Meets{' '}
                    <span className="text-blue-bright">Business Understanding</span>
                  </>
                }
              />
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-graytext">
              {[
                'From process re-engineering and application development to cloud, analytics, AI, digital infrastructure, and marketing, we support organizations across their complete digital transformation journey.',
                'Our team brings together decades of combined experience in technology and business domains, enabling us to design solutions that are not only technically robust but also practically aligned with how your business actually works.',
                'We believe digital transformation is not about adopting technology for its own sake. It is about creating a connected, intelligent, and efficient business environment where people, processes, applications, and data work together to drive growth.',
              ].map((text, i) => (
                <p key={i} data-animate>
                  {text}
                </p>
              ))}
            </div>

            <div
              data-animate
              className="mt-8 inline-block transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <Button to="/contact" icon>
                Get in Touch
              </Button>
            </div>
          </div>

          {/* -------- Right: Image (no glow) -------- */}
          <div
            ref={imageWrapRef}
            className="relative overflow-hidden rounded-2xl group"
          >
            {/* Inner wrapper so parallax + zoom don't fight the entrance animation */}
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                ref={imgInnerRef}
                src="https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="IT professional examining data servers in a modern data center"
                className="w-full object-cover will-change-transform"
                loading="lazy"
              />
            </div>

            {/* Optional subtle hover gradient — remove if not needed */}
            {/* <div className="absolute inset-0 z-20 bg-gradient-to-tr from-blue-bright/0 via-blue-bright/0 to-blue-bright/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}