import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../../../components/SiteChrome";
import { support } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Collagic Privacy Policy",
  description: "How the Collagic photo collage app handles your photos and the information collected by Google services.",
  alternates: { canonical: "/apps/collagic/privacy" },
};

const services = [
  ["Google AdMob", "Showing ads, including optional rewarded ads", "Advertising ID, device and app information, IP address, approximate location derived from IP, ad interactions"],
  ["Firebase Analytics", "Understanding how features are used, to improve the app", "App-instance ID, device and app information, usage events (for example, which tools are opened), approximate location derived from IP"],
  ["Firebase Crashlytics", "Finding and fixing crashes", "Crash traces, device and operating-system information, app-instance ID"],
] as const;

export default function CollagicPrivacy() {
  return <><Header /><main id="main" className="legal wrap">
    <p className="legal-back"><Link href="/apps/collagic">← Collagic</Link></p>
    <h1>Collagic Privacy Policy</h1>
    <p className="fine-print">Effective date: 31 October 2026</p>
    <p>This policy explains how the Collagic – Freestyle Photo Collage Maker app (“Collagic”, “the app”) by Calyptas Apps handles information. Contact: <a href={`mailto:${support}`}>{support}</a>.</p>

    <h2>Your photos stay on your device</h2>
    <ul>
      <li>Photos you choose are opened through Android’s photo picker and edited on your device.</li>
      <li>Collages and projects are saved on your device. The app does not upload your photos or projects to our servers, and we do not have access to them.</li>
      <li>Background removal, auto-enhance and face or handwriting features use Google ML Kit, which processes images on your device. Google Play services may download the needed on-device models.</li>
      <li>When you share a collage, it goes to the app you choose (for example, a messaging or social app), and that app’s own privacy policy applies.</li>
    </ul>

    <h2>Information collected by third-party services</h2>
    <p>The app uses these Google services, which may collect information automatically:</p>
    <div className="legal-table" role="region" aria-label="Third-party services" tabIndex={0}>
      <table>
        <thead><tr><th>Service</th><th>Purpose</th><th>Information it may collect</th></tr></thead>
        <tbody>{services.map(([name, purpose, info]) => <tr key={name}><td>{name}</td><td>{purpose}</td><td>{info}</td></tr>)}</tbody>
      </table>
    </div>
    <p>These services are operated by Google. See how Google uses this information: <a href="https://policies.google.com/technologies/partner-sites">policies.google.com/technologies/partner-sites</a> and <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>.</p>
    <p>We do not sell personal information. We do not ask for your name, email address or an account to use the app.</p>

    <h2>Permissions</h2>
    <ul>
      <li>Internet: to load ads and send analytics and crash reports.</li>
      <li>Storage (older Android versions only): to save your collages to your device.</li>
    </ul>

    <h2>Your choices</h2>
    <ul>
      <li>You can reset your advertising ID or opt out of personalised ads in your device settings (Settings → Google → Ads, or Settings → Privacy → Ads, depending on the device).</li>
      <li>You can delete your saved projects in the app, or delete all app data by uninstalling the app.</li>
    </ul>

    <h2>Children</h2>
    <p>Collagic is not directed to children under 13, and we do not knowingly collect personal information from them.</p>

    <h2>Data retention and security</h2>
    <p>Your photos and projects stay on your device until you delete them. Information collected by Google services is retained according to Google’s policies. Data sent to these services is encrypted in transit.</p>

    <h2>Changes</h2>
    <p>We may update this policy. The effective date above shows when it last changed.</p>

    <h2>Contact</h2>
    <p><a href={`mailto:${support}?subject=Collagic%20privacy`}>{support}</a></p>
  </main><Footer /></>;
}
