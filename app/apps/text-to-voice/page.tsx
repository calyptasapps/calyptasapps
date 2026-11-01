import type { Metadata } from "next";
import { Header, Footer } from "../../components/SiteChrome";
import { site, support } from "../../lib/site";

const storeUrl = "https://play.google.com/store/apps/details?id=com.calyptasapps.tts&referrer=utm_source%3Dcalyptasapps_website%26utm_medium%3Dreferral%26utm_campaign%3Dtext_to_voice";
const privacyUrl = "https://doc-hosting.flycricket.io/text-to-voice-convert-save-privacy-policy/93de0859-83d4-447c-8135-4a324462d579/privacy";

export const metadata: Metadata = {
  title: "Text to Voice - Convert & Save | Text to speech for Android",
  description: "Turn text, PDFs, photos and web articles into natural speech, then save it as an M4A or WAV audio file. Free to download on Android.",
  alternates: { canonical: "/apps/text-to-voice" },
  openGraph: { title: "Text to Voice - Convert & Save", description: "Turn any text into natural speech and save it as audio. Free on Android.", url: "/apps/text-to-voice" },
};

const features = [
  ["Natural AI voices", "Pick from on-device neural voices that work offline, plus your phone's own text-to-speech voices. Preview a voice before you choose it."],
  ["Read from anything", "Type or paste text, import PDF, EPUB, DOC, DOCX, TXT or HTML files, scan a page with OCR, dictate with your microphone, or paste an article link."],
  ["Save as audio", "Save your narration as an M4A or WAV file. Saving continues in the background, even if you close the app, and you get a notification when it's ready."],
  ["Voiceovers for creators", "Build a script in sections, with a different voice, speed and pitch for each part. Add background music and export one merged file or separate clips."],
];

const faqs = [
  ["Is Text to Voice free?", "Yes. Reading, editing, importing and OCR scanning are free. The app contains ads. Pro removes ads and lets you save audio without spending coins."],
  ["Does it work offline?", "The on-device neural voices work offline once they are downloaded. Some phone system voices may need an internet connection, depending on your device."],
  ["What file types can I import?", "PDF, EPUB, DOC, DOCX, RTF, TXT and HTML files, plus text from photos through OCR and from web article links."],
  ["Where can I get help?", `Email ${support} with your app version, phone model and what happened. Please don't send private documents.`],
];

export default function TextToVoice() {
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Text to Voice - Convert & Save", applicationCategory: "ProductivityApplication", operatingSystem: "Android", url: `${site}/apps/text-to-voice`, downloadUrl: storeUrl, description: "Text to speech app that converts text, documents, photos and web articles into natural audio, saved as M4A or WAV files.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, publisher: { "@type": "Organization", name: "Calyptas Apps", url: site } };
  return (
    <>
      <Header />
      <main id="main">
        <section className="wrap" style={{ padding: "64px 0 32px" }}>
          <h1>Turn any text into natural speech.</h1>
          <p>Type, paste, scan or import your text, listen to it, then save it as an audio file you can play, share or open in any audio app.</p>
          <div className="actions"><a className="button primary" href={storeUrl}>Get it on Google Play</a></div>
          <p className="fine-print">For Android · Free to download · Contains ads · In-app purchases</p>
        </section>
        <section className="feature-section wrap" aria-labelledby="features">
          <h2 id="features">What you can do</h2>
          <div className="feature-list">{features.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>
        <section className="wrap" aria-labelledby="languages">
          <h2 id="languages">Works in your language.</h2>
          <p>The app is available in English, Arabic, Hindi, Indonesian, Portuguese and Spanish. Speech-to-text dictation works in 27+ languages, and neural voices cover dozens more.</p>
        </section>
        <section className="faq-section wrap">
          <h2>Questions</h2>
          <div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </section>
        <section className="download-section wrap">
          <h2>Listen to your text.</h2>
          <p>Get Text to Voice - Convert &amp; Save on your Android phone.</p>
          <a className="button primary" href={storeUrl}>Get it on Google Play</a>
          <div className="support-links"><a href={privacyUrl}>Privacy policy</a><a href={`mailto:${support}?subject=Text%20to%20Voice%20support`}>Get support</a></div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </main>
      <Footer />
    </>
  );
}
