import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";
import { CONTACTO_COPY } from "@/lib/site-copy";

export const metadata: Metadata = {
  title: "Contacto",
  description: CONTACTO_COPY.title,
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="flex flex-col gap-2 pb-8">
        <span className="card-kicker">{CONTACTO_COPY.kicker}</span>
        <h1>{CONTACTO_COPY.title}</h1>
      </div>

      <ContactForm />

      <hr className="hr" />

      <div className="flex flex-col gap-3 py-4">
        <span className="kicker">{CONTACTO_COPY.directTitle}</span>
        <div className="flex flex-wrap gap-6">
          <a href={`mailto:${CONTACT_INFO.email}`} className="card-title text-base">
            Email
          </a>
          <a href={CONTACT_INFO.linkedin} className="card-title text-base">
            LinkedIn
          </a>
          <a href={CONTACT_INFO.calendly} className="card-title text-base">
            Calendly
          </a>
        </div>
      </div>
    </div>
  );
}
