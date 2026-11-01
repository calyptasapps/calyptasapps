import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { site } from "./lib/site";
const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Calyptas Apps — Android apps for everyday creativity", template: "%s | Calyptas Apps" },
  description: "Discover Collagic, the freestyle photo collage maker, and practical Android apps from Calyptas Apps. Explore real app previews and download on Google Play.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Calyptas Apps", locale: "en_US", title: "Calyptas Apps — Android apps for everyday creativity", description: "Meet Collagic and discover Android apps for creativity and everyday life.", url: site, images: [{ url: "/collagic/feature.webp", width: 1024, height: 500, alt: "Collagic photo collage examples" }] },
  twitter: { card: "summary_large_image" },
  verification: { google: "jRxCdQ-b1O_x6IkYHciW4cJvm8abHYZNYc8MQulBNlE" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geist.variable}><body>{children}</body></html>;
}
