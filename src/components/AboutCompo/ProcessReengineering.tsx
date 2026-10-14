// import React from "react";

// export default function ProcessReengineering() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
//       {/* Decorative background blobs */}
//       <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-indigo-200/30 blur-3xl" />
//       <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/40 blur-3xl" />

//       <div className="relative mx-auto grid min-h-[612px] max-w-[1480px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12 lg:py-[90px] xl:px-16">
//         {/* Left Content */}
//         <div className="w-full">
//           {/* Eyebrow / badge */}
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-1.5 backdrop-blur-sm">
//             <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
//             <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
//               Our Expertise
//             </span>
//           </div>

//           <h1 className="max-w-[720px] text-[34px] font-extrabold leading-[1.15] tracking-[-1px] text-[#0f172a] sm:text-[42px] lg:text-[52px]">
//             Process{" "}
//             <span className="relative inline-block">
//               <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Reengineering
//               </span>
//               <span className="absolute bottom-1 left-0 z-0 h-3 w-full rounded-full bg-blue-200/50" />
//             </span>
//             <br className="hidden sm:block" />
//             <span className="text-[#0f172a]"> for Digitization</span>
//           </h1>

//           {/* Divider accent */}
//           <div className="mt-8 flex items-center gap-3">
//             <span className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
//             <span className="h-1 w-3 rounded-full bg-blue-300" />
//             <span className="h-1 w-1.5 rounded-full bg-blue-200" />
//           </div>

//           <p className="mt-8 max-w-[680px] text-[16px] font-medium leading-[1.9] text-[#4b5563] sm:text-[17px] lg:text-[19px]">
//             We create value for our customers by understanding and improving
//             their processes both from short-term and long-term perspective.
//             We guide business process owners and subject matter experts in
//             re-engineering business processes by focusing on redesign and
//             reconfiguration of existing processes.
//           </p>

//           {/* Feature pills */}
//           <div className="mt-8 flex flex-wrap gap-3">
//             {["Process Redesign", "Digital Transformation", "Workflow Optimization"].map(
//               (item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-300 hover:text-blue-700"
//                 >
//                   {item}
//                 </span>
//               )
//             )}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex w-full items-center justify-center lg:justify-end">
//           <div className="group relative w-full max-w-[585px]">
//             {/* Glow behind image */}
//             <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-cyan-400/20 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

//             {/* Card frame */}
//             <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-3 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
//               <div className="overflow-hidden rounded-2xl">
//                 <img
//                   src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img,w_468/https://www.iiiqbets.com/wp-content/uploads/2021/04/bpr.jpg"
//                   alt="Business process re-engineering workflow"
//                   className="block h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
//                 />
//               </div>
//             </div>

//             {/* Floating accent badge */}
//             <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md sm:block">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2.2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-slate-900">Accelerate</p>
//                   <p className="text-xs font-medium text-slate-500">
//                     Digital workflows
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";

export default function ProcessReengineering() {
  const sectionRef = useRef<HTMLElement>(null);

  // ---- Scroll-linked progress ----
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // Background parallax
  const blobTopY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const blobBottomY = useTransform(smoothProgress, [0, 1], [0, 100]);
  const blobCenterScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.15, 0.9]);

  // Image parallax
  const imageY = useTransform(smoothProgress, [0, 1], [60, -60]);
  const imageRotate = useTransform(smoothProgress, [0, 0.5, 1], [-2, 0, 2]);
  const badgeY = useTransform(smoothProgress, [0, 1], [20, -30]);

  // Content-side scroll-linked
  const underlineScale = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);
  const accentWidth = useTransform(smoothProgress, [0.15, 0.5], [0, 48]);

  // Content wrapper subtle drift
  const contentX = useTransform(smoothProgress, [0, 0.5], [-30, 0]);
  const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.85, 1],
    [0.6, 1, 1, 0.85]
  );

  // ---- Variants ----
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 },
    },
  };

  // ---- Left content incoming animations ----

  // Eyebrow badge: slide in from far left + rotate slightly
  const eyebrowIn: Variants = {
    hidden: { opacity: 0, x: -80, rotate: -4 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Heading word reveal (masked, rises from below)
  const headingContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const wordReveal: Variants = {
    hidden: { opacity: 0, y: "100%", rotateX: -60 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Divider accent: slides in from left with fade
  const dividerIn: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  // Paragraph: slide in from left + blur-to-sharp
  const paragraphIn: Variants = {
    hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  };

  // Pills: each rises from below with a slight left offset
  const pillsContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 },
    },
  };

  const pillItem: Variants = {
    hidden: { opacity: 0, x: -30, y: 20, scale: 0.85, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      {/* Background blobs */}
      <motion.div
        style={{ y: blobTopY }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
      />
      <motion.div
        style={{ y: blobBottomY }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-indigo-200/30 blur-3xl"
      />
      <motion.div
        style={{ scale: blobCenterScale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/40 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[612px] max-w-[1480px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12 lg:py-[90px] xl:px-16">
        {/* Left Content */}
        <motion.div
          style={{ x: contentX, opacity: contentOpacity }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full"
        >
          {/* Eyebrow / badge — slides in from left */}
          <motion.div
            variants={eyebrowIn}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-1.5 backdrop-blur-sm"
          >
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-blue-600"
            />
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700"
            >
              Our Expertise
            </motion.span>
          </motion.div>

          {/* Heading — word-by-word masked reveal */}
          <motion.h1
            variants={headingContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-[720px] text-[34px] font-extrabold leading-[1.15] tracking-[-1px] text-[#0f172a] sm:text-[42px] lg:text-[52px]"
          >
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span variants={wordReveal} className="inline-block">
                Process
              </motion.span>
            </span>{" "}
            <span className="relative inline-block overflow-hidden align-bottom">
              <motion.span
                variants={wordReveal}
                className="relative z-10 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                Reengineering
              </motion.span>
              {/* Scroll-linked underline */}
              <motion.span
                style={{ scaleX: underlineScale, transformOrigin: "left" }}
                className="absolute bottom-1 left-0 z-0 h-3 w-full rounded-full bg-blue-200/50"
              />
            </span>
            <br className="hidden sm:block" />
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span variants={wordReveal} className="inline-block text-[#0f172a]">
                for
              </motion.span>
            </span>{" "}
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span variants={wordReveal} className="inline-block text-[#0f172a]">
                Digitization
              </motion.span>
            </span>
          </motion.h1>

          {/* Divider accent — slides in from left */}
          <motion.div variants={dividerIn} className="mt-8 flex items-center gap-3">
            <motion.span
              style={{ width: accentWidth }}
              className="h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
            />
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
              className="h-1 rounded-full bg-blue-300"
            />
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.25, ease: "easeOut" }}
              className="h-1 rounded-full bg-blue-200"
            />
          </motion.div>

          {/* Paragraph — slides in from left + blur reveal */}
          <motion.p
            variants={paragraphIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 max-w-[680px] text-[16px] font-medium leading-[1.9] text-[#4b5563] sm:text-[17px] lg:text-[19px]"
          >
            We create value for our customers by understanding and improving
            their processes both from short-term and long-term perspective. We
            guide business process owners and subject matter experts in
            re-engineering business processes by focusing on redesign and
            reconfiguration of existing processes.
          </motion.p>

          {/* Feature pills — slide up + in from left, staggered */}
          <motion.div
            variants={pillsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              "Process Redesign",
              "Digital Transformation",
              "Workflow Optimization",
            ].map((item) => (
              <motion.span
                key={item}
                variants={pillItem}
                whileHover={{
                  y: -4,
                  scale: 1.06,
                  boxShadow: "0 10px 25px -8px rgba(37,99,235,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="cursor-default rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-300 hover:text-blue-700"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex w-full items-center justify-center lg:justify-end"
        >
          <motion.div
            style={{ y: imageY, rotate: imageRotate }}
            className="group relative w-full max-w-[585px]"
          >
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-cyan-400/20 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-3 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img,w_468/https://www.iiiqbets.com/wp-content/uploads/2021/04/bpr.jpg"
                  alt="Business process re-engineering workflow"
                  className="block h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              style={{ y: badgeY }}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md sm:block"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                >
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Accelerate</p>
                  <p className="text-xs font-medium text-slate-500">
                    Digital workflows
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}