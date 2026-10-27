import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Globe2,
  PackageCheck,
  SearchCheck,
  Ship,
} from "lucide-react";

const featuredProducts = [
  {
    title: "Indian Spices",
    subtitle: "Whole and ground spices",
    image: "/products/spices.webp",
    href: "/products/spices",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    title: "Premium Makhana",
    subtitle: "Selected grades and packaging",
    image: "/products/makhana.avif",
    href: "/products/makhana",
    className: "",
  },
  {
    title: "Grains & Pulses",
    subtitle: "Commercial sourcing solutions",
    image: "/products/grains.jpg",
    href: "/products/grains-pulses",
    className: "",
  },
  {
    title: "Agricultural Products",
    subtitle: "Freshness from trusted sources",
    image: "/products/agriculture.png",
    href: "/products/agricultural-products",
    className: "",
  },
  {
    title: "Herbal Products",
    subtitle: "Naturally inspired wellness",
    image: "/products/herbal.webp",
    href: "/products/herbal-products",
    className: "",
  },
];

const sourcingSteps = [
  {
    number: "01",
    title: "Share Requirement",
    description:
      "Tell us the product, grade, quantity, packaging and destination you require.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Product Sourcing",
    description:
      "We identify suitable sourcing possibilities based on your specifications.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Quality & Packaging",
    description:
      "Product specifications, packing options and applicable requirements are reviewed.",
    icon: PackageCheck,
  },
  {
    number: "04",
    title: "Supply Coordination",
    description:
      "We coordinate commercial documentation, dispatch and delivery requirements.",
    icon: Ship,
  },
];

export function HomeVisualSections() {
  return (
    <>
      {/* Visual product showcase */}
      <section className="section overflow-hidden bg-muted">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Explore our range</p>

              <h2 className="section-title text-brand-navy dark:text-white">
                Products selected for quality-conscious markets
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                From aromatic Indian spices and premium makhana to grains,
                agricultural produce and herbal products, our portfolio is
                designed around changing buyer requirements.
              </p>
            </div>

            <Link href="/products" className="button-secondary self-start">
              Browse all products
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.title}
                href={product.href}
                className={`product-visual-card group relative overflow-hidden rounded-[1.75rem] bg-[#061b3e] ${
                  product.className
                } ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, 25vw"
                  }
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061b3e] via-[#061b3e]/10 to-transparent transition duration-500 group-hover:from-[#061b3e]/95" />

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 text-white transition duration-500 group-hover:translate-y-0 sm:p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#d5dc7c]">
                    {product.subtitle}
                  </p>

                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3
                      className={`font-extrabold ${
                        index === 0 ? "text-3xl" : "text-xl"
                      }`}
                    >
                      {product.title}
                    </h3>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-navy opacity-0 transition duration-300 group-hover:opacity-100">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* <Link
              href="/products/cosmetics-personal-care"
              className="group relative overflow-hidden rounded-[1.75rem] bg-[#061b3e]"
            >
              <Image
                src="/products/personal-care.avif"
                alt="Cosmetics and personal-care products"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061b3e] via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#d5dc7c]">
                  Modern retail products
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Personal Care
                </h3>
              </div>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Sourcing process */}
      <section className="section overflow-hidden">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">How we work</p>

            <h2 className="section-title text-brand-navy dark:text-white">
              From buyer requirement to supply coordination
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our structured approach keeps communication clear throughout the
              product-sourcing journey.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-12 hidden border-t-2 border-dashed border-brand-olive/25 lg:block" />

            {sourcingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="process-card card group relative p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-brand-olive hover:shadow-xl"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <span className="absolute right-5 top-4 text-5xl font-extrabold text-brand-olive/10">
                    {step.number}
                  </span>

                  <span className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-background bg-brand-navy text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-brand-olive dark:bg-brand-olive">
                    <Icon size={28} />
                  </span>

                  <h3 className="mt-6 text-lg font-extrabold text-brand-navy dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Export banner */}
      <section className="section pt-0">
        <div className="site-container">
          <div className="export-banner relative overflow-hidden rounded-[2rem] bg-[#061b3e] px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[45px] border-white/5" />
            <div className="absolute -bottom-28 right-32 h-72 w-72 rounded-full border border-[#bec66a]/20" />

            <Globe2 className="globe-float absolute right-[8%] top-1/2 hidden -translate-y-1/2 text-white/10 lg:block" size={240} />

            <div className="relative max-w-3xl">
              <p className="eyebrow mb-4 !text-[#d5dc7c]">
                Domestic and international trade
              </p>

              <h2 className="section-title">
                Connecting quality products with new market opportunities
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                We support wholesale, distribution and export enquiries with
                requirement-based sourcing, packaging coordination and clear
                commercial communication.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: BadgeCheck, label: "Quality-focused sourcing" },
                  { icon: Boxes, label: "Flexible packaging" },
                  { icon: Globe2, label: "Market-oriented supply" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold backdrop-blur"
                  >
                    <Icon size={17} className="text-[#d5dc7c]" />
                    {label}
                  </span>
                ))}
              </div>

              <Link
                href="/export-import"
                className="button-primary mt-9 !bg-[#89931e]"
              >
                Explore Export Services
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}