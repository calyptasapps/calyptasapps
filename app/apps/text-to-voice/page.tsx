import type { Metadata } from "next";
import AppPage from "../../components/AppPage";
import { getApp } from "../../lib/apps";

const app = getApp("text-to-voice")!;

export const metadata: Metadata = {
  title: "Text to Voice - Convert & Save | Text to speech for Android",
  description: "Turn text, PDFs, photos and web articles into natural speech, then save it as an M4A or WAV audio file. Free to download on Android.",
  alternates: { canonical: "/apps/text-to-voice" },
  openGraph: { title: "Text to Voice - Convert & Save", description: "Turn any text into natural speech and save it as audio. Free on Android.", url: "/apps/text-to-voice" },
};

export default function TextToVoice() {
  return <AppPage app={app} />;
}
