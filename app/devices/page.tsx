import Link from "next/link";
import { categories } from "../lib/products";
import Image from "next/image";

export default function DevicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1a3c6e] text-center mb-4">Explore Our Apple Device Categories</h1>
      <p className="text-center text-[#6b6b6b] mb-8">Find your perfect Apple device</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/devices/${cat.slug}`}>
            <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#e8e4e0] hover:shadow-lg hover:-translate-y-1 transition">
              <div className="relative w-full aspect-square mb-3 bg-[#faf8f6] rounded-xl overflow-hidden">
                {cat.products[0]?.image ? (
                  <Image
                    src={`/images/${cat.products[0].image}`}
                    alt={cat.title}
                    width={150}
                    height={150}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-5xl">📱</div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-[#1a3c6e]">{cat.title}</h3>
              <p className="text-sm text-[#6b6b6b]">{cat.products.length} models</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}