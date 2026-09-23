"use client";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { contact } from "@/lib/site-data";
export function EnquiryForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!contact.formspreeEndpoint) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const response = await fetch(contact.formspreeEndpoint, {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      e.currentTarget.reset();
      setStatus("success");
    } else setStatus("error");
  }
  return (
    <form onSubmit={submit} className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Full name
          <input className="field" name="name" required autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Company
          <input className="field" name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Email
          <input
            className="field"
            type="email"
            name="email"
            required
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Phone
          <input className="field" type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        Interested product
        <select className="field" name="product">
          <option>General enquiry</option>
          <option>Agricultural Products</option>
          <option>Spices</option>
          <option>Makhana</option>
          <option>Grains & Pulses</option>
          <option>Herbal Products</option>
          <option>Cosmetics & Personal Care</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Your requirement
        <textarea className="field min-h-36 resize-y" name="message" required />
      </label>
      <button
        className="button-primary"
        disabled={status === "sending"}
        type="submit"
      >
        <Send size={17} />{" "}
        {status === "sending" ? "Sending..." : "Submit Enquiry"}
      </button>
      <div aria-live="polite" className="text-sm font-semibold">
        {status === "success" && (
          <p className="text-green-700 dark:text-green-400">
            Thank you. Your enquiry has been submitted.
          </p>
        )}
        {status === "error" && (
          <p className="text-amber-700 dark:text-amber-300">
            The enquiry service is being configured. Please contact us directly
            for now.
          </p>
        )}
      </div>
    </form>
  );
}
