import Link from "next/link";
import { developer, support } from "../lib/site";

export function Header() {
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header wrap"><Link className="wordmark" href="/" aria-label="Calyptas Apps home"><span className="brand-symbol" aria-hidden="true">c</span>Calyptas Apps</Link><nav aria-label="Main navigation"><Link href="/apps/collagic">Collagic</Link><Link href="/#apps">All apps</Link><a href={`mailto:${support}`}>Support</a></nav></header></>;
}
export function Footer() {
  return <footer className="footer wrap"><div><Link className="wordmark" href="/">Calyptas Apps</Link><p>Independent Android apps, made in Bangladesh.</p></div><div className="footer-links"><Link href="/apps/collagic">Collagic</Link><Link href="/apps/text-to-voice">Text to Voice</Link><a href={developer}>Google Play</a><a href={`mailto:${support}`}>Contact & support</a></div><p className="copyright">© {new Date().getFullYear()} Calyptas Apps</p></footer>;
}
