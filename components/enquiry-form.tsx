"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { contact } from "@/lib/site-data";

type FormStatus = "idle" | "sending" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!contact.formspreeEndpoint) {
      setStatus("error");
      setErrorMessage(
        "The enquiry service is not configured. Please contact us directly."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);

        const message =
          result?.errors
            ?.map((error: { message?: string }) => error.message)
            .filter(Boolean)
            .join(", ") ||
          "We could not submit your enquiry. Please try again.";

        throw new Error(message);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  function handleFormChange() {
    if (status === "success" || status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  return (
    <form
      onSubmit={submit}
      onChange={handleFormChange}
      className="card space-y-5 p-6 sm:p-8"
    >
      {/* Formspree email subject */}
      <input
        type="hidden"
        name="_subject"
        value="New enquiry from Mizavara Global website"
      />

      {/* Spam-protection honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Full name <span className="text-red-500">*</span>

          <input
            className="field"
            name="name"
            required
            autoComplete="name"
            placeholder="Enter your full name"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold">
          Company

          <input
            className="field"
            name="company"
            autoComplete="organization"
            placeholder="Enter your company name"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Email <span className="text-red-500">*</span>

          <input
            className="field"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="name@company.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold">
          Phone

          <input
            className="field"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+91 98765 43210"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold">
        Interested product

        <select
          className="field"
          name="product"
          defaultValue="General enquiry"
        >
          <option value="General enquiry">General enquiry</option>
          <option value="Agricultural Products">
            Agricultural Products
          </option>
          <option value="Food & Beverages">Food & Beverages</option>
          <option value="Spices">Spices</option>
          <option value="Makhana">Makhana</option>
          <option value="Grains & Pulses">Grains & Pulses</option>
          <option value="Herbal Products">Herbal Products</option>
          <option value="Cosmetics & Personal Care">
            Cosmetics & Personal Care
          </option>
          <option value="Custom Sourcing">Custom Sourcing</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-bold">
        Your requirement <span className="text-red-500">*</span>

        <textarea
          className="field min-h-36 resize-y"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          placeholder="Tell us the product, quantity, packaging and destination you require."
        />
      </label>

      <button
        className="button-primary min-w-44 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? (
          <>
            <LoaderCircle size={17} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={17} />
            Submit Enquiry
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300"
          >
            <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

            <p>
              Thank you. Your enquiry has been submitted successfully. Our
              team will contact you shortly.
            </p>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
          >
            <AlertCircle size={20} className="mt-0.5 shrink-0" />

            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}