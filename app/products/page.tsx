import { PageHero } from "@/components/page-hero";
import { products } from "@/lib/site-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const metadata = {
  title: "Our Products",
  description:
    "Explore agricultural products, spices, makhana, grains, herbal products, food and personal-care categories from Mizavara Global.",
};
export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our portfolio"
        title="Diverse products. One dependable connection."
        description="Our product categories are designed to support wholesale, distribution, retail and export enquiries. Final specifications and availability are confirmed against each requirement."
      />
      <section className="section">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {products.map(({ slug, name, description, icon: Icon }, i) => (
            <Link
              href={`/products/${slug}`}
              key={name}
              className="card group flex gap-5 p-7 transition hover:-translate-y-1 hover:border-brand-olive hover:shadow-lg"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted text-brand-olive">
                <Icon />
              </span>
              <div>
                <span className="text-xs font-extrabold text-muted-foreground">
                  CATEGORY 0{i + 1}
                </span>
                <h2 className="mt-1 text-xl font-extrabold text-brand-navy dark:text-white">
                  {name}
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-olive">
                  View details <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="button-primary">
            Enquire about a product <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
