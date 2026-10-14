// import React from "react";

// export default function BusinessProcessOverview() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
//       {/* Decorative background blobs */}
//       <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
//       <div className="pointer-events-none absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />

//       <div className="relative mx-auto grid max-w-[1480px] grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:py-20 xl:px-16">
//         {/* Left Image */}
//         <div className="group relative w-full">
//           {/* Glow behind image */}
//           <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-cyan-400/20 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

//           {/* Card frame */}
//           <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-3 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.25)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
//             <div className="overflow-hidden rounded-2xl">
//               <img
//                 src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img,w_620/https://www.iiiqbets.com/wp-content/uploads/2021/04/bpr2.jpg"
//                 alt="Digital transformation and business process integration"
//                 className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//               />
//             </div>
//           </div>

//           {/* Floating stat badge */}
//           <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md sm:block">
//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm font-bold text-slate-900">Unified Vision</p>
//                 <p className="text-xs font-medium text-slate-500">
//                   Across functions
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="w-full">
//           {/* Eyebrow badge */}
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-4 py-1.5 backdrop-blur-sm">
//             <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
//             <span className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-700">
//               Why It Matters
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="text-[26px] font-extrabold leading-[1.25] tracking-[-0.6px] text-[#0f172a] sm:text-[30px] lg:text-[34px]">
//             Bridging the gap between{" "}
//             <span className="relative inline-block">
//               <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
//                 legacy processes
//               </span>
//               <span className="absolute bottom-1 left-0 z-0 h-3 w-full rounded-full bg-indigo-200/50" />
//             </span>{" "}
//             and digital vision
//           </h2>

//           {/* Divider accent */}
//           <div className="mt-6 flex items-center gap-3">
//             <span className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600" />
//             <span className="h-1 w-3 rounded-full bg-indigo-300" />
//             <span className="h-1 w-1.5 rounded-full bg-indigo-200" />
//           </div>

//           {/* Paragraphs */}
//           <div className="mt-8 space-y-6 text-[16px] font-normal leading-[1.9] text-[#4b5563] sm:text-[17px] lg:text-[18px]">
//             <p className="relative pl-5 border-l-2 border-indigo-200">
//               It is common to observe that core business processes continue to
//               operate in their own traditional way despite the Digitization
//               drive across the industry as well as within the organization
//               itself. This usually goes unnoticed despite the potential of
//               integrating the aggregation of information across functions.
//               Operating models struggle to achieve a unified digital vision.
//             </p>

//             <p>
//               At{" "}
//               <span className="font-semibold text-indigo-700">iiiQ</span>, our
//               starting point in any assignment is Business Process
//               Reengineering (BPR). We, along with our customers, take a
//               critical look at core processes to spot areas that need
//               improvement and potential candidates for digitization.
//             </p>

//             <p>
//               By taking a step back, strategists can analyse areas like supply
//               chain, customer experience and finance operations so that
//               experts can embed emerging technologies and intelligent
//               workflows to improve the business holistically.
//             </p>
//           </div>

//           {/* Focus area pills */}
//           <div className="mt-8 flex flex-wrap gap-3">
//             {["Supply Chain", "Customer Experience", "Finance Operations"].map(
//               (item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-300 hover:text-indigo-700"
//                 >
//                   {item}
//                 </span>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessProcessOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<Array<HTMLParagraphElement | null>>([]);
  const pillsRef = useRef<Array<HTMLSpanElement | null>>([]);
  const pillsWrapRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ============ PARALLAX BACKGROUND BLOBS ============ */
      if (blob1Ref.current) {
        gsap.to(blob1Ref.current, {
          yPercent: 40,
          xPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
      if (blob2Ref.current) {
        gsap.to(blob2Ref.current, {
          yPercent: -35,
          xPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
      if (blob3Ref.current) {
        gsap.to(blob3Ref.current, {
          yPercent: 30,
          xPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      /* ============ IMAGE ENTRANCE + PARALLAX ============ */
      if (imageFrameRef.current) {
        gsap.from(imageFrameRef.current, {
          x: -80,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      /* ============ FLOATING BADGE ============ */
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          scale: 0.6,
          opacity: 0,
          y: 30,
          duration: 0.9,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.to(badgeRef.current, {
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
        });
      }

      /* ============ CONTENT SIDE — MASTER TIMELINE ============ */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // 1) Eyebrow
      if (eyebrowRef.current) {
        tl.from(eyebrowRef.current, {
          y: 24,
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          ease: "back.out(1.6)",
        });
      }

      // 2) Heading words
      const headingWords =
        headingRef.current?.querySelectorAll(".word-reveal");
      if (headingWords && headingWords.length) {
        tl.from(
          headingWords,
          {
            yPercent: 110,
            opacity: 0,
            rotateX: -60,
            duration: 0.75,
            stagger: 0.05,
            ease: "power3.out",
            transformOrigin: "50% 100% -30px",
          },
          "-=0.3"
        );
      }

      // 3) Highlight underline draw
      const underline = headingRef.current?.querySelector(
        ".highlight-underline"
      );
      if (underline) {
        tl.from(
          underline,
          {
            scaleX: 0,
            duration: 0.9,
            ease: "power3.inOut",
            transformOrigin: "left center",
          },
          "-=0.4"
        );
      }

      // 4) Divider accents
      if (dividerRef.current) {
        tl.from(
          dividerRef.current.children,
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            transformOrigin: "left center",
          },
          "-=0.6"
        );
      }

      // 5) Paragraphs
      const validParagraphs = paragraphsRef.current.filter(
        (el): el is HTMLParagraphElement => el !== null
      );

      validParagraphs.forEach((p) => {
        tl.from(
          p,
          {
            y: 30,
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.2"
        );
      });

      // 6) Pills
      const validPills = pillsRef.current.filter(
        (el): el is HTMLSpanElement => el !== null
      );
      if (validPills.length) {
        tl.from(
          validPills,
          {
            y: 20,
            opacity: 0,
            scale: 0.7,
            rotate: -8,
            duration: 0.55,
            stagger: 0.1,
            ease: "back.out(1.8)",
          },
          "-=0.4"
        );
      }

      /* ============ MAGNETIC HOVER ON PILLS ============ */
      validPills.forEach((pill) => {
        const onMove = (e: MouseEvent) => {
          const rect = pill.getBoundingClientRect();
          const relX = e.clientX - rect.left - rect.width / 2;
          const relY = e.clientY - rect.top - rect.height / 2;
          gsap.to(pill, {
            x: relX * 0.25,
            y: relY * 0.35,
            duration: 0.35,
            ease: "power2.out",
          });
        };
        const onLeave = () => {
          gsap.to(pill, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
          });
        };
        pill.addEventListener("mousemove", onMove);
        pill.addEventListener("mouseleave", onLeave);
      });

      /* ============ PARALLAX FOR CONTENT COLUMN ============ */
      const contentCol = sectionRef.current?.querySelector(
        ".content-col"
      ) as HTMLElement | null;
      if (contentCol) {
        gsap.to(contentCol, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      /* ============ PARAGRAPH HOVER — soft lift ============ */
      validParagraphs.forEach((p) => {
        p.addEventListener("mouseenter", () => {
          gsap.to(p, { x: 6, duration: 0.4, ease: "power2.out" });
        });
        p.addEventListener("mouseleave", () => {
          gsap.to(p, { x: 0, duration: 0.5, ease: "power2.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper to wrap heading words for stagger animation
  const renderHeadingWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i}>
        <span
          className="inline-block overflow-hidden align-bottom"
          style={{ perspective: "400px" }}
        >
          <span className="word-reveal inline-block will-change-transform">
            {word}
          </span>
        </span>
        <span>&nbsp;</span>
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50"
    >
      {/* Decorative background blobs */}
      <div
        ref={blob1Ref}
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl will-change-transform"
      />
      <div
        ref={blob2Ref}
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl will-change-transform"
      />
      <div
        ref={blob3Ref}
        className="pointer-events-none absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl will-change-transform"
      />

      <div className="relative mx-auto grid max-w-[1480px] grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:py-20 xl:px-16">
        {/* Left Image */}
        <div className="group relative w-full">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-cyan-400/20 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          <div
            ref={imageFrameRef}
            className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-3 shadow-[0_20px_60px_-15px_rgba(79,70,229,0.25)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 will-change-transform"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                ref={imageRef}
                src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img,w_620/https://www.iiiqbets.com/wp-content/uploads/2021/04/bpr2.jpg"
                alt="Digital transformation and business process integration"
                className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] will-change-transform"
              />
            </div>
          </div>

          <div
            ref={badgeRef}
            className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md sm:block will-change-transform"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Unified Vision
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Across functions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="content-col w-full will-change-transform">
          {/* Eyebrow badge */}
          <div
            ref={eyebrowRef}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-700">
              Why It Matters
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-[26px] font-extrabold leading-[1.25] tracking-[-0.6px] text-[#0f172a] sm:text-[30px] lg:text-[34px]"
          >
            {renderHeadingWords("Bridging the gap between")}{" "}
            <span className="relative inline-block">
              {/* Underline sits BEHIND the words */}
              <span className="highlight-underline absolute bottom-1 left-0 z-0 h-3 w-full rounded-full bg-indigo-200/50" />

              {/* Each word gets its own gradient so text is visible */}
              <span className="relative z-10 inline-block overflow-hidden align-bottom">
                <span className="word-reveal inline-block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent will-change-transform">
                  legacy
                </span>
              </span>
              <span>&nbsp;</span>
              <span className="relative z-10 inline-block overflow-hidden align-bottom">
                <span className="word-reveal inline-block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent will-change-transform">
                  processes
                </span>
              </span>
            </span>{" "}
            {renderHeadingWords("and digital vision")}
          </h2>

          {/* Divider accent */}
          <div ref={dividerRef} className="mt-6 flex items-center gap-3">
            <span className="divider-accent h-1 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600" />
            <span className="divider-accent h-1 w-3 rounded-full bg-indigo-300" />
            <span className="divider-accent h-1 w-1.5 rounded-full bg-indigo-200" />
          </div>

          {/* Paragraphs */}
          <div className="mt-8 space-y-6 text-[16px] font-normal leading-[1.9] text-[#4b5563] sm:text-[17px] lg:text-[18px]">
            <p
              ref={(el) => {
                paragraphsRef.current[0] = el;
              }}
              className="relative pl-5 border-l-2 border-indigo-200 will-change-transform"
            >
              It is common to observe that core business processes continue to
              operate in their own traditional way despite the Digitization
              drive across the industry as well as within the organization
              itself. This usually goes unnoticed despite the potential of
              integrating the aggregation of information across functions.
              Operating models struggle to achieve a unified digital vision.
            </p>

            <p
              ref={(el) => {
                paragraphsRef.current[1] = el;
              }}
              className="will-change-transform"
            >
              At <span className="font-semibold text-indigo-700">iiiQ</span>,
              our starting point in any assignment is Business Process
              Reengineering (BPR). We, along with our customers, take a
              critical look at core processes to spot areas that need
              improvement and potential candidates for digitization.
            </p>

            <p
              ref={(el) => {
                paragraphsRef.current[2] = el;
              }}
              className="will-change-transform"
            >
              By taking a step back, strategists can analyse areas like supply
              chain, customer experience and finance operations so that
              experts can embed emerging technologies and intelligent
              workflows to improve the business holistically.
            </p>
          </div>

          {/* Focus area pills */}
          <div ref={pillsWrapRef} className="mt-8 flex flex-wrap gap-3">
            {["Supply Chain", "Customer Experience", "Finance Operations"].map(
              (item, i) => (
                <span
                  key={item}
                  ref={(el) => {
                    pillsRef.current[i] = el;
                  }}
                  className="inline-block cursor-default rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-300 hover:text-indigo-700 will-change-transform"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}