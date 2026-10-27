import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Home } from "lucide-react";
import { products } from "@/lib/site-data";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  return product
    ? {
        title: product.name,
        description: product.description,
      }
    : {};
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const Icon = product.icon;

  return (
    <main>
      {/* Product banner */}
      <section className="relative min-h-[430px] overflow-hidden bg-[#061b3e] text-white">
        <Image
          src={product.bannerImage}
          alt={`${product.name} products supplied by Mizavara Global`}
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: product.bannerPosition,
          }}
          sizes="50vw"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061b3e] via-[#061b3e]/90 to-[#061b3e]/10" />

        {/* Decorative glow */}
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-olive/10 blur-3xl" />

        <div className="site-container relative flex min-h-[430px] items-center py-20">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 text-sm text-white/65"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 transition hover:text-[#d5dc7c]"
              >
                <Home size={15} />
                Home
              </Link>

              <span>/</span>

              <Link
                href="/products"
                className="transition hover:text-[#d5dc7c]"
              >
                Products
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#d5dc7c]">
                {product.name}
              </span>
            </nav>

            {/* <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d5dc7c]">
              Product category
            </p> */}

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {product.description}
            </p>

            {/* <Link
              href={`/contact?product=${product.slug}`}
              className="button-primary mt-8 !bg-[#89931e]"
            >
              Send Product Enquiry
              <ArrowRight size={17} />
            </Link> */}
          </div>
        </div>
      </section>

      {/* Product information */}
      <section className="section">
        <div className="site-container grid items-start gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <article>
            <Link
              href="/products"
              className="mb-8 inline-flex items-center gap-2 text-sm font-extrabold text-brand-olive transition hover:-translate-x-1"
            >
              <ArrowLeft size={17} />
              All products
            </Link>

            <div className="group relative mb-8 aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-muted shadow-lg">
              <Image
                src={product.productImage}
                alt={`${product.name} supplied by Mizavara Global`}
                fill
                className="object-cover object-center transition duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061b3e]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  {product.name}
                </span>
              </div>
            </div>

            {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-brand-olive">
              <Icon size={30} />
            </div> */}

            <h2 className="mt-7 text-3xl font-extrabold text-brand-navy dark:text-white">
              Product overview
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {product.details}
            </p>

            <p className="mt-5 leading-7 text-muted-foreground">
              Exact products, grades, prices, minimum quantities,
              certifications, packaging options and delivery terms will be
              confirmed according to your enquiry.
            </p>
          </article>

          {/* Highlights card */}
          <aside className="card sticky top-28 overflow-hidden p-7 sm:p-9">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-olive to-[#bec66a]" />

            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-olive/10 text-brand-olive">
                <Icon size={24} />
              </span>

              <h2 className="text-xl font-extrabold text-brand-navy dark:text-white">
                Category highlights
              </h2>
            </div>

            <ul className="mt-7 space-y-4">
              {product.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-brand-olive"
                  />

                  <span className="font-semibold leading-6">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/contact?product=${product.slug}`}
              className="button-primary mt-8 w-full"
            >
              Enquire about {product.name}
              <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
