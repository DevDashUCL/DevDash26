"use client";

import { useState } from "react";
import { FAQS } from "../../lib/faqs";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-20 bg-radial-glow flex items-center justify-center px-4">
      <div className="max-w-3xl w-full">
        <div className="section-header">
          {/* <p className="section-label">FAQ</p> */}
          <h2 className="section-title">
            FA<span className="highlight">Q</span>
          </h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {item.question}
                <span className="icon">+</span>
              </button>
              <div className="faq-a-wrap">
                <div className="faq-a">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
export { Faq as FAQSection };
