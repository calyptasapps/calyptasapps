import Image from "next/image";
import type { AppInfo } from "../lib/apps";
import { storeUrl } from "../lib/apps";
import { site, support } from "../lib/site";
import { Header, Footer } from "./SiteChrome";

export default function AppPage({ app }: { app: AppInfo }) {
  const download = storeUrl(app, "app_hero");
  const footerDownload = storeUrl(app, "app_footer");
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: app.category,
    operatingSystem: "Android",
    url: `${site}/apps/${app.slug}`,
    downloadUrl: storeUrl(app, "schema"),
    description: app.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: app.stats.rating, ratingCount: app.stats.ratingCount.replace("K", "000") },
    publisher: { "@type": "Organization", name: "Calyptas Apps", url: site },
  };

  const tiles: [string, string, string?][] = [
    ["Downloads", app.stats.downloads],
    ["Rating", `${app.stats.rating} ★`, `${app.stats.ratingCount} reviews`],
    ["Price", app.stats.price],
    ["Android", `${app.stats.minAndroid}+`, "minimum version"],
  ];

  return (
    <>
      <Header />
      <main id="main">
        <section className="collagic-hero app-page-hero wrap">
          <div className="hero-copy">
            <div className="app-identity"><Image src={app.icon} width={56} height={56} alt="" /><span>{app.name}</span></div>
            <h1>{app.tagline}</h1>
            <p>{app.description}</p>
            <div className="actions"><a className="button primary" href={download}>Get it on Google Play</a><a className="text-link" href="#screens-title">See the app</a></div>
            <p className="fine-print">For Android · {app.stats.price} to download · Contains {app.stats.contains.join(" and ").toLowerCase()}</p>
          </div>
          <div className="hero-gallery app-page-gallery">
            {app.screenshots.slice(0, 2).map((screen, index) => <Image key={screen.src} className={index === 0 ? "hero-main" : "hero-side"} src={screen.src} alt={screen.alt} width={554} height={1200} sizes="(max-width:700px) 55vw, 340px" preload={index === 0} />)}
          </div>
        </section>

        <section className="wrap" aria-label="App details" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
          {tiles.map(([label, value, note]) => (
            <div key={label} style={{ border: "1px solid var(--border, #ddd)", borderRadius: 16, padding: 16 }}>
              <p className="fine-print" style={{ margin: 0 }}>{label}</p>
              <p style={{ margin: "4px 0", fontSize: 24, fontWeight: 700 }}>{value}</p>
              {note && <p className="fine-print" style={{ margin: 0 }}>{note}</p>}
            </div>
          ))}
        </section>
        <p className="wrap fine-print">Public figures from Google Play, last checked {app.stats.lastChecked}. They change over time; the Play Store page always shows the latest.</p>

        <section className="feature-section wrap" aria-labelledby="features">
          <h2 id="features">What you can do</h2>
          <div className="feature-list">{app.features.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className="screens-section" aria-labelledby="screens-title">
          <div className="section-heading wrap"><div><h2 id="screens-title">Take a look around.</h2><p>See {app.name} in action.</p></div></div>
          <div className="screenshot-rail" tabIndex={0} role="region" aria-label="Scroll through app screenshots">
            {app.screenshots.map(screen => <figure key={screen.src}><a href={screen.src} target="_blank" rel="noopener noreferrer" aria-label={`View larger screenshot: ${screen.title}`}><Image src={screen.src} alt={screen.alt} width={554} height={1200} sizes="(max-width:600px) 72vw, 280px" /></a><figcaption>{screen.title}</figcaption></figure>)}
          </div>
        </section>

        <section className="wrap app-languages" aria-labelledby="languages">
          <h2 id="languages">Works in your language.</h2>
          <p>The app is available in {app.languages.join(", ")}.</p>
        </section>

        <section className="faq-section wrap">
          <h2>Questions</h2>
          <div className="faq-list">{app.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </section>

        <section className="download-section wrap">
          <Image src={app.icon} width={64} height={64} alt="" />
          <h2>Get {app.name}.</h2>
          <p>Get it on your Android phone.</p>
          <a className="button primary" href={footerDownload}>Get it on Google Play</a>
          <div className="support-links"><a href={app.privacyUrl}>Privacy policy</a><a href={`mailto:${support}?subject=${encodeURIComponent(app.name + " support")}`}>Get support</a></div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </main>
      <Footer />
    </>
  );
}
