import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

function isComposite(
  homeImage: CaseStudy["homeImage"],
): homeImage is Extract<CaseStudy["homeImage"], { web: unknown }> {
  return typeof homeImage === "object" && "web" in homeImage;
}

export function HomeFeaturedCard({ c }: { c: CaseStudy }) {
  const image = c.homeImage;

  return (
    <Link href={`/proyectos/${c.slug}`} className="card elev-sm block gap-4 no-underline hover:elev-md">
      <figure className="relative mb-2 aspect-[16/8] overflow-hidden rounded-md bg-gradient-to-b from-bg to-neutral-900">
        {isComposite(image) ? (
          <>
            <div className="absolute left-[30%] top-[14%] w-[80%] overflow-hidden rounded-l-[10px] shadow-lg">
              <Image
                src={image.web.src}
                alt=""
                width={1000}
                height={600}
                className="block w-full"
                style={{ height: "auto" }}
              />
            </div>
            {image.phones.map((phone, i) => (
              <div
                key={i}
                className={`absolute overflow-hidden rounded-xl shadow-[0_18px_24px_rgba(0,0,0,0.55)] ${phone.className}`}
              >
                <Image
                  src={phone.image.src}
                  alt=""
                  width={300}
                  height={650}
                  className="block w-full"
                  style={{ height: "auto" }}
                />
              </div>
            ))}
          </>
        ) : (
          <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        )}
      </figure>
      <div className="card-kicker">{c.cardKicker}</div>
      <div className="card-title text-xl">{c.title}</div>
      <p className="card-body">{c.summary}</p>
    </Link>
  );
}

export function HomeGridCard({ c }: { c: CaseStudy }) {
  const image = c.homeImage;
  const src = isComposite(image) ? image.web.src : image.src;

  return (
    <Link href={`/proyectos/${c.slug}`} className="card elev-sm h-full no-underline hover:elev-md">
      <figure className="relative mb-2 aspect-[401/300] overflow-hidden rounded-sm bg-bg">
        <div className="absolute left-1/2 top-[8%] aspect-video w-[84%] -translate-x-1/2 overflow-hidden rounded-t-md shadow-lg">
          <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
        </div>
      </figure>
      <div className="card-kicker">{c.cardKicker}</div>
      <div className="card-title">{c.title}</div>
      <p className="card-body">{c.summary}</p>
    </Link>
  );
}
