export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="relative overflow-hidden border-b border-border bg-muted/60 py-20 sm:py-28"><div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-[#7c8618]/10 blur-3xl"/><div className="site-container relative"><p className="eyebrow mb-5">{eyebrow}</p><h1 className="section-title max-w-4xl text-brand-navy dark:text-white">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p></div></section>;
}
