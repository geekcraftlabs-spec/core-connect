import { notFound } from "next/navigation";
import { categories, Category, Product } from "../../lib/products";
import Image from "next/image";

export async function generateStaticParams() {
  return categories.map((cat: Category) => ({ slug: cat.slug }));
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c: Category) => c.slug === slug);
  if (!category) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1a3c6e] text-center mb-2">{category.title}</h1>
      <p className="text-center text-[#6b6b6b] mb-8">{category.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.products.map((product: Product, idx: number) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md border border-[#e8e4e0] overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="relative w-full aspect-square bg-[#faf8f6] p-4">
              <Image src={`/images/${product.image}`} alt={product.name} width={200} height={200} className="object-contain w-full h-full" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-md font-semibold text-[#1a3c6e]">{product.name}</h3>
              <p className="text-xl font-bold text-[#c7412d] mt-1">{product.price}</p>
              <a
                href={`https://wa.me/27750286134?text=${encodeURIComponent(product.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-[#25D366] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-[#128C7E] transition"
              >
                💬 Buy on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}