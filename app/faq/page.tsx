"use client";
import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    { q: "What payment methods do you offer?", a: "We offer Cash on Delivery (COD) and Cash on Collection (COC) for all products to ensure trust and security." },
    { q: "How does delivery work for customers outside Gauteng?", a: "We provide transparent delivery nationwide with reliable couriers. You'll receive real-time tracking updates." },
    { q: "Are your Apple products authentic?", a: "Yes, all our products are 100% authentic Apple products, backed by warranties for your peace of mind." },
    { q: "Where are your collection sites located?", a: "Our collection sites are located in Gauteng for convenient pick-up. Contact us via WhatsApp for specific locations and hours." },
    { q: "How long does delivery take?", a: "Within Gauteng, expect 1–3 business days. Outside Gauteng, delivery typically takes 3–7 business days with full tracking." },
    { q: "Can I return a product if I'm not satisfied?", a: "Yes, we offer returns within 7 days if the product is unused and in original condition. Contact us to initiate a return." },
    { q: "How do I contact customer support?", a: "Reach out via WhatsApp, Instagram, X, or phone. Visit our Contact Us page for all options." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1a3c6e] text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-center text-[#6b6b6b] mb-12">Find answers to common questions about shopping with Core Connect.</p>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md border border-[#e8e4e0] overflow-hidden hover:shadow-lg transition">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#faf8f6] transition font-medium text-[#1a3c6e]"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{faq.q}</span>
              <span className="text-xl text-[#c7412d]">{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-[#4a4a4a]">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1a3c6e] text-center mb-4">Suggest a Question</h2>
        <form
          action="https://formspree.io/f/xwpnwpdq"
          method="POST"
          target="_blank"
          className="bg-white p-6 rounded-2xl shadow-md border border-[#e8e4e0] space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-[#4a4a4a] mb-1">Your Name (Optional)</label>
            <input type="text" name="name" className="w-full border border-[#e8e4e0] rounded-lg px-4 py-2 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4a4a4a] mb-1">Your Question</label>
            <textarea name="question" rows={4} className="w-full border border-[#e8e4e0] rounded-lg px-4 py-2 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent" placeholder="Enter your question here" maxLength={500} required></textarea>
          </div>
          <button type="submit" className="w-full bg-[#1a3c6e] text-white py-3 rounded-lg font-semibold hover:bg-[#2a5c9e] transition">
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
}