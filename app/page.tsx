import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import { products } from "@/lib/site-data";
import { HomeVisualSections } from "@/components/home-visual-sections";
export default function Home() {
  return (
    <main>
      <section className="relative min-h-[700px] overflow-hidden bg-[#061b3e] text-white">
        <Image
          src="/hero-products.png"
          alt="Indian spices, makhana, grains and herbal products"
          fill
          priority
          className="object-cover object-center opacity-65"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061b3e] via-[#061b3e]/90 to-[#061b3e]/20" />
        <div className="site-container relative flex min-h-[700px] items-center py-24">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#d5dc7c] backdrop-blur">
              <Globe2 size={15} /> Quality products. Global possibilities.
            </p>
            <h1 className="display-title">
              Rooted in quality.
              <br />
              <span className="text-[#bec66a]">Ready for the world.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Mizavara Global connects trusted agricultural, food, herbal and
              personal-care products with buyers across domestic and
              international markets.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className="button-primary !bg-[#89931e]">
                Explore Products <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="button-secondary border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border bg-card">
        <div className="site-container grid divide-y divide-border py-2 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            {
              icon: ShieldCheck,
              title: "Quality-led sourcing",
              text: "Products selected against buyer requirements.",
            },
            {
              icon: Globe2,
              title: "Trade-ready approach",
              text: "Support for domestic and international supply.",
            },
            {
              icon: Handshake,
              title: "Reliable relationships",
              text: "Clear communication from enquiry to delivery.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 px-5 py-7 first:pl-0 md:last:pr-0"
            >
              <Icon className="mt-1 shrink-0 text-brand-olive" />
              <div>
                <h2 className="font-extrabold">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Our portfolio</p>
              <h2 className="section-title max-w-2xl text-brand-navy dark:text-white">
                Products shaped for changing markets
              </h2>
            </div>
            <Link href="/products" className="button-secondary self-start">
              View all categories <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ name, description, icon: Icon }, index) => (
              <article
                key={name}
                className="card group p-6 transition duration-300 hover:-translate-y-2 hover:border-brand-olive hover:shadow-xl"
              >
                <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-brand-olive transition group-hover:bg-brand-olive group-hover:text-white">
                  <Icon size={23} />
                </span>
                <span className="text-xs font-extrabold text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-lg font-extrabold text-brand-navy dark:text-white">
                  {name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HomeVisualSections />
      <section className="section bg-muted">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Why Mizavara</p>
            <h2 className="section-title text-brand-navy dark:text-white">
              A thoughtful bridge between source and market
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We are building a diversified product platform centred on
              dependable sourcing, quality awareness and responsive trade
              coordination.
            </p>
          </div>
          <div className="card p-7 sm:p-10">
            <div className="space-y-6">
              {[
                "Buyer-focused product sourcing",
                "Transparent enquiry and coordination",
                "Flexible wholesale and export requirements",
                "Expandable product and market network",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-border pb-5 last:border-0 last:pb-0"
                >
                  <CheckCircle2 className="shrink-0 text-brand-olive" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container rounded-[2rem] bg-[#082657] px-6 py-14 text-center text-white sm:px-12">
          <p className="eyebrow mb-4 !text-[#d5dc7c]">Start a conversation</p>
          <h2 className="section-title mx-auto max-w-3xl">
            Looking for a dependable product-sourcing partner?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Tell us what you need, your market and expected quantity. Our team
            will connect with you once the business details are finalized.
          </p>
          <Link href="/contact" className="button-primary mt-8 !bg-[#89931e]">
            Send an Enquiry <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
