"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUp,
  Download,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { contact, navItems, socialLinks } from "@/lib/site-data";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mizavara-theme");
    const next = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    const onScroll = () => setShowTop(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mizavara-theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="site-container flex h-20 items-center justify-between gap-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Mizavara Global home"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5">
              <Image
                src="/mizavara-logo.png"
                alt="Mizavara Global logo"
                width={120}
                height={120}
                priority
              />
            </span>
            <span className="leading-tight">
              <strong className="block truncate text-[1.5rem] tracking-tight text-brand-navy dark:text-white">
                Mizavara Global
              </strong>
              <span className="hidden text-[.67rem] font-semibold uppercase tracking-[.18em] text-muted-foreground sm:block">
                Private Limited
              </span>
            </span>
          </Link>
          <nav className="desktop-navigation" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="icon-button"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <Link href="/contact" className="button-primary desktop-enquiry">
              Send Enquiry
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="icon-button mobile-menu-button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            className="mobile-drawer site-container"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="button-primary mt-2"
            >
              Send Enquiry
            </Link>
          </nav>
        )}
      </header>

      {children}

      <footer className="border-t border-white/10 bg-[#061b3e] text-white">
        <div className="site-container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                <Image
                  src="/mizavara-logo.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
              <div>
                <strong className="block text-lg">Mizavara Global</strong>
                <span className="text-xs uppercase tracking-[.18em] text-white/55">
                  Private Limited
                </span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/65">
              Connecting quality Indian products with markets through
              responsible sourcing, dependable coordination and long-term trade
              relationships.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-extrabold text-white/65 transition hover:border-[#bec66a] hover:text-[#bec66a]"
                >
                  {link.name === "Facebook"
                    ? "f"
                    : link.name === "Instagram"
                      ? "◎"
                      : "in"}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[.16em] text-[#bec66a]">
              Quick Links
            </h2>
            <div className="grid gap-3 text-sm text-white/70">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[.16em] text-[#bec66a]">
              Company Profile
            </h2>
            <p className="mb-5 text-sm leading-6 text-white/65">
              Our company brochure will be available here once the final profile
              is supplied.
            </p>
            <button
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/50"
            >
              <Download size={16} /> Brochure coming soon
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Mizavara Global Private Limited. All
          rights reserved. <span className="mx-2">•</span>
          <Link href="/privacy-policy">Privacy</Link>
          <span className="mx-2">•</span>
          <Link href="/terms">Terms</Link>
        </div>
      </footer>
      <a
        href={contact.whatsapp}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:-translate-y-1"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={23} />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-20 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-xl transition-all hover:-translate-y-1 dark:bg-brand-olive ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={21} />
      </button>
    </div>
  );
}
