import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Nav() {
  return (
    <header className="border-b border-divider">
      <nav className="nav mx-auto max-w-6xl">
        <Link href="/" className="nav-brand">
          {SITE_NAME}
        </Link>
        {NAV_LINKS.filter((link) => link.href !== "/").map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
