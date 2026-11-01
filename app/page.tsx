import Link from "next/link";
import { Header, Footer } from "./components/SiteChrome";
import FeaturedApp from "./components/FeaturedApp";
import { getApp, storeUrl } from "./lib/apps";
import { collagicDownload, developer, site, support } from "./lib/site";
const apps = [
  { name: "QR Code Generator – QR Studio", description: "Create QR codes for links, text, contacts and Wi-Fi.", category: "Tools" },
  { name: "Love Calculator : Match Test", description: "A light-hearted compatibility game for couples, crushes and friends.", category: "Entertainment" },
  { name: "Image Resizer - Resizely", description: "Resize and optimise pictures from your Android device.", category: "Photography" },
  { name: "Voicefy - Voice Effects", description: "Play with voice effects and make audio transformations.", category: "Audio" },
  { name: "বাংলা হাসির কৌতুক Bangla Jokes", description: "Discover jokes and a little everyday laughter in Bangla.", category: "Entertainment" },
  { name: "ঈশপের গল্প - Eshop er golpo", description: "Read classic moral stories in Bengali.", category: "Books" },
];
const textToVoice = getApp("text-to-voice")!;

export default function Home() {
  return <><Header /><main id="main">
    <section className="home-intro wrap"><h1>A little more creativity.<br />A little less everyday effort.</h1><p>We make Android apps for the things you love to create and the things you need to get done.</p></section>
    <div className="featured-apps">
      <FeaturedApp id="collagic" name="Collagic" headline="Your photos have more to say." description="Make a travel diary, a birthday collage or a moodboard that feels like you. Arrange your photos freely, start with a design and make every detail yours." icon="/collagic/icon.webp" page="/apps/collagic" download={collagicDownload("home_feature")} preload artwork={[
        { src: "/collagic/travel_diary.webp", alt: "Travel diary made with three photos in Collagic", width: 900, height: 1200 },
        { src: "/collagic/magazine_cover.webp", alt: "Magazine cover collage made in Collagic", width: 900, height: 1200 },
      ]} />
      <FeaturedApp id="text-to-voice" name="Text to Voice" headline="Let your words be heard." description="Turn text, documents and photos into speech. Choose a voice, listen at your own pace and save audio to enjoy later." icon="/text-to-voice/icon.webp" page="/apps/text-to-voice" download={storeUrl(textToVoice, "home_feature")} variant="voice" artwork={[
        { src: "/text-to-voice/screen-1.webp", alt: "Text to Voice reading screen", width: 554, height: 1200 },
        { src: "/text-to-voice/screen-2.webp", alt: "Text to Voice voice engine options", width: 554, height: 1200 },
      ]} />
    </div>
    <section className="apps-section wrap" id="apps"><div className="section-heading"><div><h2>Find your next everyday app.</h2><p>Explore the rest of our Android collection.</p></div><a className="text-link" href={developer}>Visit our Google Play collection</a></div><div className="app-grid">{apps.map(app=><article className="app-card" key={app.name}><p className="category">{app.category}</p><h3>{app.name}</h3><p>{app.description}</p>{"page" in app ? <Link className="text-link" href={app.page as string}>Explore {app.name}<span className="sr-only"> page</span></Link> : <a href={developer}>Find in our Google Play collection<span className="sr-only">: {app.name}</span></a>}</article>)}</div></section>
    <section className="about wrap"><h2>Small studio.<br />Useful ideas.</h2><div><p>We’re an independent Android app studio based in Bangladesh. Our apps bring together creative tools, practical utilities and a little fun.</p><p>Have a question or something you’d like us to improve?</p><a className="text-link" href={`mailto:${support}`}>Talk to Calyptas Apps</a></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Calyptas Apps",url:site,email:support,sameAs:[developer]})}} />
  </main><Footer /></>;
}
