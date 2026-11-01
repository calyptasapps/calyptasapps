import Image from "next/image";
import Link from "next/link";

type FeaturedAppProps = {
  id: string;
  name: string;
  headline: string;
  description: string;
  icon: string;
  page: string;
  download: string;
  artwork: [{ src: string; alt: string; width: number; height: number }, { src: string; alt: string; width: number; height: number }];
  variant?: "voice";
  preload?: boolean;
};

export default function FeaturedApp({ id, name, headline, description, icon, page, download, artwork, variant, preload = false }: FeaturedAppProps) {
  return (
    <section className={`featured wrap${variant ? ` featured--${variant}` : ""}`} aria-labelledby={`${id}-title`}>
      <div className="featured-copy">
        <div className="app-identity"><Image src={icon} alt="" width={52} height={52} /><span>Meet {name}</span></div>
        <h2 id={`${id}-title`}>{headline}</h2>
        <p>{description}</p>
        <div className="actions">
          <a className="button primary" href={download}>Get {name} on Google Play</a>
          <Link className="text-link" href={page}>Explore {name}</Link>
        </div>
        <p className="fine-print">For Android · Free to download · Contains ads</p>
      </div>
      <Link href={page} className="featured-art" aria-label={`Explore ${name}`}>
        {artwork.map((image, index) => <Image key={image.src} className={index === 0 ? "feature-travel" : "feature-cover"} {...image} sizes="(max-width: 700px) 55vw, 340px" preload={preload && index === 0} />)}
      </Link>
    </section>
  );
}
