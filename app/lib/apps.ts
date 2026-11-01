import { developer, site, support } from "./site";

// Public app details only (what anyone can see on Google Play).
// Never put private console data here: revenue, earnings, install funnels, internal notes.
// Refresh the public numbers from the Play Store page and update lastChecked.
export type AppInfo = {
  slug: string;
  name: string;
  packageName: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
  screenshots: { src: string; title: string; alt: string }[];
  features: [string, string][];
  languages: string[];
  faqs: [string, string][];
  stats: {
    downloads: string;
    rating: string;
    ratingCount: string;
    minAndroid: string;
    price: string;
    contains: string[];
    lastChecked: string;
  };
  privacyUrl: string;
};

export const apps: AppInfo[] = [
  {
    slug: "text-to-voice",
    name: "Text to Voice - Convert & Save",
    packageName: "com.calyptasapps.tts",
    category: "Productivity",
    tagline: "Turn any text into natural speech.",
    description: "Type, paste, scan or import your text, listen to it, then save it as an audio file you can play, share or open in any audio app.",
    icon: "/text-to-voice/icon.webp",
    screenshots: [
      { src: "/text-to-voice/screen-1.webp", title: "Turn text into speech", alt: "Text to Voice reading screen" },
      { src: "/text-to-voice/screen-2.webp", title: "Choose a voice engine", alt: "Voice engine options in Text to Voice" },
    ],
    features: [
      ["Natural AI voices", "Pick from on-device neural voices that work offline, plus your phone's own text-to-speech voices. Preview a voice before you choose it."],
      ["Read from anything", "Type or paste text, import PDF, EPUB, DOC, DOCX, TXT or HTML files, scan a page with OCR, dictate with your microphone, or paste an article link."],
      ["Save as audio", "Save your narration as an M4A or WAV file. Saving continues in the background, even if you close the app, and you get a notification when it's ready."],
      ["Voiceovers for creators", "Build a script in sections, with a different voice, speed and pitch for each part. Add background music and export one merged file or separate clips."],
    ],
    languages: ["English", "Arabic", "Hindi", "Indonesian", "Portuguese", "Spanish"],
    faqs: [
      ["Is Text to Voice free?", "Yes. Reading, editing, importing and OCR scanning are free. The app contains ads. Pro removes ads and lets you save audio without spending coins."],
      ["Does it work offline?", "The on-device neural voices work offline once they are downloaded. Some phone system voices may need an internet connection, depending on your device."],
      ["What file types can I import?", "PDF, EPUB, DOC, DOCX, RTF, TXT and HTML files, plus text from photos through OCR and from web article links."],
      ["Where can I get help?", `Email ${support} with your app version, phone model and what happened. Please don't send private documents.`],
    ],
    stats: {
      downloads: "100K+",
      rating: "4.1",
      ratingCount: "4.77K",
      minAndroid: "6.0",
      price: "Free",
      contains: ["Ads", "In-app purchases"],
      lastChecked: "2026-11-01",
    },
    privacyUrl: "https://doc-hosting.flycricket.io/text-to-voice-convert-save-privacy-policy/93de0859-83d4-447c-8135-4a324462d579/privacy",
  },
];

export function getApp(slug: string): AppInfo | undefined {
  return apps.find((a) => a.slug === slug);
}

export function storeUrl(app: AppInfo, placement: string) {
  const referrer = new URLSearchParams({ utm_source: "calyptasapps_website", utm_medium: "referral", utm_campaign: app.slug, utm_content: placement });
  return `https://play.google.com/store/apps/details?id=${app.packageName}&referrer=${encodeURIComponent(referrer.toString())}`;
}

export { developer, site };
