"use client";
import React, { useEffect } from "react";
import FaqCard from "./FaqCard";
import { FaqData } from "@/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
    AOS.refresh(); // Refresh AOS initially
  }, []);

  const refreshAOSWithDelay = (delay) => {
    setTimeout(() => {
      AOS.refresh();
    }, delay);
  };

  return (
    <div
      id="faq"
      className="flex flex-col justify-center items-center mt-8 max-sm:pt-[80px] px-[40px] max-sm:px-[27px]"
    >
      <h4 className='text-3xl md:text-5xl text-center text-red w-full font-semibold mb-16'>F.A.Q</h4>
      {FaqData.map((data, i) => (
        <div className="mb-[10px] sm:mb-[16px]" data-aos="fade-right" key={i}>
          <FaqCard
            question={data.question}
            answer={data.answer}
            AOSrefresh={refreshAOSWithDelay}
          />
        </div>
      ))}
    </div>
  );
};

export default Faq;
