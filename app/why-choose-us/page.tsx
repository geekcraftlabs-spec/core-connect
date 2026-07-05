import Link from "next/link";

export default function WhyChooseUsPage() {
  const benefits = [
    {
      icon: "💳",
      title: "Secure Payments with COD & COC",
      desc: "We offer strict Cash on Delivery (COD) and Cash on Collection (COC) for all products. Pay only when you receive your order.",
    },
    {
      icon: "📦",
      title: "Transparent Delivery Nationwide",
      desc: "For customers outside Gauteng, we provide real-time tracking and reliable couriers.",
    },
    {
      icon: "✅",
      title: "Premium Apple Quality",
      desc: "Every product is 100% authentic, backed by warranties for your peace of mind.",
    },
    {
      icon: "💬",
      title: "Dedicated Customer Support",
      desc: "Our team is here to assist you before, during, and after your purchase.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1a3c6e] text-center mb-4">Why Choose Core Connect?</h1>
      <p className="text-center text-[#6b6b6b] max-w-2xl mx-auto mb-12">
        At Core Connect, we&apos;re more than just an online store – we&apos;re your trusted partner for premium Apple products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="bg-white rounded-2xl p-6 shadow-md border border-[#e8e4e0] hover:shadow-lg transition">
            <div className="text-4xl mb-3">{benefit.icon}</div>
            <h3 className="text-lg font-semibold text-[#1a3c6e] mb-2">{benefit.title}</h3>
            <p className="text-[#6b6b6b] text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1a3c6e] text-white rounded-2xl p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Trust, Our Priority</h2>
        <p className="max-w-2xl mx-auto text-white/80">
          We know how infuriating it is to fall victim to online scams. At Core Connect, we&apos;ve built our business on trust. Our strict COD and COC policies mean you only pay when your product is in your hands.
        </p>
      </div>

      <div className="text-center">
        <Link href="/devices" className="bg-[#c7412d] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#a83524] transition inline-block">
          Shop Now
        </Link>
      </div>
    </div>
  );
}