import { CONTACT_INFO, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-divider">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {SITE_NAME}
        </span>
        <div className="flex gap-4">
          <a href={`mailto:${CONTACT_INFO.email}`}>Email</a>
          <a href={CONTACT_INFO.linkedin}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
