import Link from "next/link";
import Image from "next/image";
import { categories } from "./lib/products";

export default function HomePage() {
  // Get first 4 categories for the hero grid (or we can use featured products)
  const featuredProducts = [
    { name: "iPhone 15", price: "R12 000", image: "/images/iphone15.128.jpg" },
    { name: "MacBook Air", price: "R15 000", image: "/images/macbookair13m1.jpg" },
    { name: "AirPods Max", price: "R9 000", image: "/images/airpodsmax.png" },
    { name: "iPad Pro", price: "R15 000", image: "/images/ipadpro4thgen.jpg" },
  ];

  // For categories section, we'll use the first product image from each category (or fallback)
  const categoryPreview = categories.slice(0, 6).map((cat) => ({
    name: cat.title,
    slug: cat.slug,
    image: cat.products[0]?.image ? `/images/${cat.products[0].image}` : null,
    count: cat.products.length,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-block bg-[#1a3c6e]/10 text-[#1a3c6e] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🇿🇦 South Africa&apos;s Trusted Apple Reseller
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3c6e] leading-tight mb-4">
            Premium Apple Products
            <br />
            <span className="text-[#c7412d]">Delivered to You</span>
          </h1>
          <p className="text-lg text-[#4a4a4a] mb-6 max-w-lg">
            Welcome to Core Connect, your trusted online store for premium reloved and new Apple products. Stay Core, Stay Connected.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/devices" className="bg-[#1a3c6e] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-[#2a5c9e] transition inline-block">
              Shop Now
            </Link>
            <Link href="/why-choose-us" className="border-2 border-[#1a3c6e] text-[#1a3c6e] px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3c6e] hover:text-white transition">
              Learn More
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-6 text-sm text-[#6b6b6b]">
            <span>✅ Cash on Delivery</span>
            <span>🔒 100% Authentic</span>
            <span>🚚 Nationwide</span>
          </div>
        </div>
        <div className="relative">
          <div className="bg-linear-to-br from-[#1a3c6e]/5 to-[#c7412d]/5 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-4">
              {featuredProducts.map((product) => (
                <div key={product.name} className="bg-white rounded-2xl p-4 shadow-lg border border-[#e8e4e0] hover:shadow-xl transition transform hover:-translate-y-1">
                  <div className="relative w-full aspect-square mb-2">
                    <Image src={product.image} alt={product.name} width={120} height={120} className="object-contain w-full h-full" />
                  </div>
                  <p className="text-sm font-semibold text-center">{product.name}</p>
                  <p className="text-[#c7412d] font-bold text-center">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-white rounded-xl p-5 text-center shadow-md border border-[#e8e4e0]">
          <div className="text-3xl mb-2">💳</div>
          <h3 className="font-semibold text-[#1a3c6e] text-sm">Cash on Delivery</h3>
          <p className="text-xs text-[#6b6b6b]">Pay when you receive</p>
        </div>
        <div className="bg-white rounded-xl p-5 text-center shadow-md border border-[#e8e4e0]">
          <div className="text-3xl mb-2">📍</div>
          <h3 className="font-semibold text-[#1a3c6e] text-sm">Collection Sites</h3>
          <p className="text-xs text-[#6b6b6b]">Pick up in Gauteng</p>
        </div>
        <div className="bg-white rounded-xl p-5 text-center shadow-md border border-[#e8e4e0]">
          <div className="text-3xl mb-2">📦</div>
          <h3 className="font-semibold text-[#1a3c6e] text-sm">Transparent Delivery</h3>
          <p className="text-xs text-[#6b6b6b]">Real-time tracking</p>
        </div>
        <div className="bg-white rounded-xl p-5 text-center shadow-md border border-[#e8e4e0]">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-semibold text-[#1a3c6e] text-sm">Premium Quality</h3>
          <p className="text-xs text-[#6b6b6b]">100% authentic</p>
        </div>
      </div>

      {/* Categories with images */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#1a3c6e]">Explore Categories</h2>
          <Link href="/devices" className="text-[#c7412d] font-semibold hover:underline text-sm">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryPreview.map((cat) => (
            <Link key={cat.slug} href={`/devices/${cat.slug}`}>
              <div className="bg-white rounded-xl p-4 text-center shadow-md border border-[#e8e4e0] hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="relative w-full aspect-square mb-2 bg-[#faf8f6] rounded-lg overflow-hidden">
                  {cat.image ? (
                    <Image src={cat.image} alt={cat.name} width={100} height={100} className="object-contain w-full h-full" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-4xl">📱</div>
                  )}
                </div>
                <p className="text-sm font-semibold text-[#1a3c6e] truncate">{cat.name}</p>
                <p className="text-xs text-[#6b6b6b]">{cat.count} models</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}