import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "./components/SiteChrome";
import { collagicDownload, developer, site, support } from "./lib/site";
const apps = [
  { name: "Text to Voice - Convert & Save", description: "Turn written words into speech and save audio for later.", category: "Productivity", page: "/apps/text-to-voice" },
  { name: "QR Code Generator – QR Studio", description: "Create QR codes for links, text, contacts and Wi-Fi.", category: "Tools" },
  { name: "Love Calculator : Match Test", description: "A light-hearted compatibility game for couples, crushes and friends.", category: "Entertainment" },
  { name: "Image Resizer - Resizely", description: "Resize and optimise pictures from your Android device.", category: "Photography" },
  { name: "Voicefy - Voice Effects", description: "Play with voice effects and make audio transformations.", category: "Audio" },
  { name: "বাংলা হাসির কৌতুক Bangla Jokes", description: "Discover jokes and a little everyday laughter in Bangla.", category: "Entertainment" },
  { name: "ঈশপের গল্প - Eshop er golpo", description: "Read classic moral stories in Bengali.", category: "Books" },
];
export default function Home() {
  return <><Header /><main id="main">
    <section className="home-intro wrap"><h1>A little more creativity.<br />A little less everyday effort.</h1><p>We make Android apps for the things you love to create and the things you need to get done.</p></section>
    <section className="featured wrap" aria-labelledby="featured-title"><div className="featured-copy"><div className="app-identity"><Image src="/collagic/icon.webp" alt="" width={52} height={52} /><span>Meet Collagic</span></div><h2 id="featured-title">Your photos have<br />more to say.</h2><p>Make a travel diary, a birthday collage or a moodboard that feels like you. Arrange your photos freely, start with a design and make every detail yours.</p><div className="actions"><a className="button primary" href={collagicDownload("home_feature")}>Get Collagic on Google Play</a><Link className="text-link" href="/apps/collagic">Explore Collagic</Link></div><p className="fine-print">For Android · Free to download · Contains ads</p></div><Link href="/apps/collagic" className="featured-art" aria-label="Explore Collagic's photo collages"><Image className="feature-travel" src="/collagic/travel_diary.webp" alt="Travel diary made with three photos in Collagic" width={900} height={1200} sizes="(max-width: 700px) 55vw, 340px" preload /><Image className="feature-cover" src="/collagic/magazine_cover.webp" alt="Magazine cover collage made in Collagic" width={900} height={1200} sizes="(max-width: 700px) 55vw, 340px" /></Link></section>
    <section className="apps-section wrap" id="apps"><div className="section-heading"><div><h2>Find your next everyday app.</h2><p>Explore the rest of our Android collection.</p></div><a className="text-link" href={developer}>Visit our Google Play collection</a></div><div className="app-grid">{apps.map(app=><article className="app-card" key={app.name}><p className="category">{app.category}</p><h3>{app.name}</h3><p>{app.description}</p>{"page" in app ? <Link className="text-link" href={app.page as string}>Explore {app.name}<span className="sr-only"> page</span></Link> : <a href={developer}>Find in our Google Play collection<span className="sr-only">: {app.name}</span></a>}</article>)}</div></section>
    <section className="about wrap"><h2>Small studio.<br />Useful ideas.</h2><div><p>We’re an independent Android app studio based in Bangladesh. Our apps bring together creative tools, practical utilities and a little fun.</p><p>Have a question or something you’d like us to improve?</p><a className="text-link" href={`mailto:${support}`}>Talk to Calyptas Apps</a></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Calyptas Apps",url:site,email:support,sameAs:[developer]})}} />
  </main><Footer /></>;
}
