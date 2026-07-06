import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const socials = [
    { name: "WhatsApp", img: "logo.png", url: "https://wa.me/27684858415" },
    { name: "Instagram", img: "instagram.png", url: "https://www.instagram.com/anotheronedown__" },
    { name: "TikTok", img: "tiktok.png", url: "https://www.tiktok.com/@geek.craft.labs" },
    { name: "X", img: "twitter.png", url: "https://x.com/another_1_downn" },
    { name: "Facebook", img: "facebook.png", url: "https://www.facebook.com/share/1C1HaUgpsB/" },
    { name: "Phone", img: "viber.png", url: "tel:+27684858415" },
  ];

  return (
    <footer className="bg-white border-t border-[#e8e4e0] py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-[#1a3c6e] text-lg mb-3">Core Connect</h3>
            <p className="text-sm text-[#6b6b6b] max-w-xs mx-auto md:mx-0">
              Your trusted source for premium Apple products in South Africa.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a3c6e] mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#6b6b6b]">
              <li><Link href="/devices" className="hover:text-[#1a3c6e] transition">Devices</Link></li>
              <li><Link href="/reviews" className="hover:text-[#1a3c6e] transition">Reviews</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#1a3c6e] transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-[#1a3c6e] transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a3c6e] mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-[#6b6b6b]">
              <li><a href="tel:+27684858415" className="hover:text-[#1a3c6e] transition">+27 68 485 8415</a></li>
              <li><a href="https://wa.me/27684858415" target="_blank" rel="noopener" className="hover:text-[#1a3c6e] transition">WhatsApp</a></li>
              <li><a href="mailto:info@geekcraftlabs.com" className="hover:text-[#1a3c6e] transition">info@geekcraftlabs.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1a3c6e] mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  className="w-8 h-8 hover:-translate-y-1 transition"
                  aria-label={social.name}
                >
                  <Image
                    src={`/images/${social.img}`}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#e8e4e0] mt-8 pt-6 text-center text-xs text-[#6b6b6b]">
          <p>&copy; {new Date().getFullYear()} Core Connect. All rights reserved.</p>
          <p className="mt-1">Stay Core, Stay Connected.</p>
        </div>
      </div>
    </footer>
  );
}