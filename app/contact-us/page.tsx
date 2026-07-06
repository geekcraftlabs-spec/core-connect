import Image from "next/image";

export default function ContactPage() {
  const socials = [
    { name: "WhatsApp", img: "whatsapp.png", url: "https://wa.me/27684858415" },
    { name: "Instagram", img: "instagram.png", url: "https://www.instagram.com/anotheronedown__" },
    { name: "TikTok", img: "tiktok.png", url: "https://www.tiktok.com/@geek.craft.labs" },
    { name: "X", img: "twitter.png", url: "https://x.com/another_1_downn" },
    { name: "Facebook", img: "facebook.png", url: "https://www.facebook.com/share/1C1HaUgpsB/" },
    { name: "Phone", img: "phone.png", url: "tel:+27684858415" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1a3c6e] text-center mb-4">Get in Touch with Core Connect</h1>
      <p className="text-center text-[#6b6b6b] max-w-2xl mx-auto mb-12">
        Have questions or need assistance? Reach out to us on any of our social platforms below or fill out the form, and we&apos;ll contact you promptly.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 w-24 text-center rounded-xl shadow-md border border-[#e8e4e0] hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="relative w-12 h-12 mx-auto mb-2">
              <Image src={`/images/${social.img}`} alt={social.name} width={48} height={48} className="object-contain" />
            </div>
            <span className="text-xs text-[#6b6b6b]">{social.name}</span>
          </a>
        ))}
      </div>

      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1a3c6e] text-center mb-4">Let Us Reach Out to You</h2>
        <form
          action="https://formspree.io/f/mwpnwpyq"
          method="POST"
          target="_blank"
          className="bg-white p-6 rounded-2xl shadow-md border border-[#e8e4e0] space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-[#4a4a4a] mb-1">Your Name</label>
            <input type="text" name="name" required className="w-full border border-[#e8e4e0] rounded-lg px-4 py-2 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4a4a4a] mb-1">Your Phone Number</label>
            <input type="tel" name="phone" required className="w-full border border-[#e8e4e0] rounded-lg px-4 py-2 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent" placeholder="Enter your phone number" />
          </div>
          <button type="submit" className="w-full bg-[#1a3c6e] text-white py-3 rounded-lg font-semibold hover:bg-[#2a5c9e] transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}