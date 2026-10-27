"use client";

import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/site-data";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Mizavara Global, I would like to enquire about your products."
    );

    const isMobile =
      /Android|iPhone|iPad|iPod|Windows Phone/i.test(
        window.navigator.userAgent
      );

    const mobileUrl = `https://wa.me/${contact.whatsapp}?text=${message}`;

    const desktopUrl =
      `https://web.whatsapp.com/send` +
      `?phone=${contact.whatsapp}&text=${message}`;

    if (isMobile) {
      window.location.href = mobileUrl;
    } else {
      window.open(desktopUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type="button"
      onClick={openWhatsApp}
      aria-label="Chat with Mizavara Global on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={27} strokeWidth={2.3} />

      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#10203d] px-3 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>

      <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-[#7c8618]" />
    </button>
  );
}