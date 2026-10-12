
import React from "react";

export default function ProcessReengineering() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid min-h-[612px] max-w-[1480px] grid-cols-1 items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.15fr_0.9fr] lg:gap-20 lg:px-0 lg:py-[85px]">
        {/* Left Content */}
        <div className="w-full">
          <h1 className="max-w-[720px] text-[34px] font-extrabold leading-[1.3] tracking-[-0.8px] text-[#111827] sm:text-[40px] lg:text-[46px]">
            Process Reengineering
            <br className="hidden sm:block" /> for Digitization
          </h1>

          <p className="mt-10 max-w-[720px] text-[17px] font-medium leading-[1.95] text-[#737373] sm:text-[18px] lg:text-[20px]">
            We create value for our customers by understanding and improving
            their processes both from short-term and long-term perspective.
            We guide business process owners and subject matter experts in
            re-engineering business processes by focusing on redesign and
            reconfiguration of existing processes.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex w-full items-center justify-center lg:justify-end">
          <img
            src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img,w_468/https://www.iiiqbets.com/wp-content/uploads/2021/04/bpr.jpg"
            alt="Business process re-engineering workflow"
            className="block h-auto w-full max-w-[585px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
