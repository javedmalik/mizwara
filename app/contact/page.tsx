import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { contact } from "@/lib/site-data";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
export const metadata = {
  title: "Contact Us",
  description:
    "Contact Mizavara Global Private Limited for product sourcing, wholesale, export and import enquiries.",
};
export default function ContactPage() {
  const details = [
    { i: Mail, t: "Email", v: contact.email },
    { i: Phone, t: "Phone", v: contact.phone },
    { i: MessageCircle, t: "WhatsApp", v: contact.whatsapp },
    { i: MapPin, t: "Office", v: contact.address },
  ];
  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="Tell us what you are looking for"
        description="Share your product requirement, quantity and destination. We will use the finalized contact details once supplied."
      />
      <section className="section">
        <div className="site-container grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy dark:text-white">
              Let’s discuss your requirement
            </h2>
            <div className="mt-8 space-y-4">
              {details.map(({ i: Icon, t, v }) => (
                <div className="card flex gap-4 p-5" key={t}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-brand-olive">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold">{t}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {v}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
