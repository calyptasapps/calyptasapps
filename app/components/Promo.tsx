"use client";
import { useState } from "react";
import Image from "next/image";

export default function Promo() {
  const [playing, setPlaying] = useState(false);
  return <div className="promo-player">{playing ? <iframe src="https://www.youtube-nocookie.com/embed/qlu8oniqzTg?autoplay=1&rel=0" title="Collagic: from camera roll to cover story" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen /> : <button type="button" onClick={() => setPlaying(true)} className="video-poster" aria-label="Play the 28-second Collagic demo. Loads YouTube video."><Image src="/collagic/feature.webp" alt="A selection of collages made in Collagic" width={1024} height={500} sizes="(max-width: 800px) 100vw, 900px" /><span className="play-label"><span aria-hidden="true">▶</span> Watch Collagic in action <small>28 seconds</small></span></button>}</div>;
}
