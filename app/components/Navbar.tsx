"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/devices", label: "Devices" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact-us", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8e4e0]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#1a3c6e] tracking-tight flex items-center gap-2">
            <span className="bg-[#1a3c6e] text-white text-xs rounded-full w-8 h-8 flex items-center justify-center font-mono">
              CC
            </span>
            Core Connect
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 transition ${
                  pathname === link.href
                    ? "text-[#1a3c6e] border-b-2 border-[#c7412d]"
                    : "text-[#6b6b6b] hover:text-[#1a3c6e] hover:border-b-2 hover:border-[#c7412d]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#1a3c6e] transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#1a3c6e] transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-[#1a3c6e] transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#e8e4e0] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 px-3 rounded-lg transition ${
                  pathname === link.href
                    ? "bg-[#1a3c6e] text-white"
                    : "hover:bg-[#faf8f6] text-[#1a3c6e]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}