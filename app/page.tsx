const apps = [
  {
    name: "Text to Voice - Convert & Save",
    description:
      "Convert text into natural-sounding speech and save audio as MP3 or WAV.",
    category: "Productivity",
    link: "https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en",
  },
  {
    name: "QR Code Generator – QR Studio",
    description:
      "Create stylish QR codes for text, links, contact info, WiFi, and more.",
    category: "Tools",
    link: "https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en",
  },
  {
    name: "Love Calculator : Match Test",
    description:
      "A fun compatibility calculator for couples, crushes, and friends.",
    category: "Entertainment",
    link: "https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en",
  },
  {
    name: "Image Resizer - Resizely",
    description:
      "Resize and optimize images quickly from your Android device.",
    category: "Photography",
    link: "https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en",
  },
  {
    name: "Voicefy - Voice Effects",
    description:
      "Apply voice effects and create fun audio transformations.",
    category: "Audio",
    link: "https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en",
  },
  {
    name: "Freestyle Photo Collage Maker",
    description:
      "Create beautiful freestyle photo collages with simple editing tools.",
    category: "Photography",
    link: "https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en",
  },
  {
    name: "বাংলা হাসির কৌতুক Bangla Jokes",
    description:
      "A Bangla jokes app for fun, laughter, and entertainment.",
    category: "Entertainment",
    link: "https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en",
  },
  {
    name: "ঈশপের গল্প - Eshop er golpo",
    description:
      "A Bengali story app featuring classic moral stories.",
    category: "Books",
    link: "https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Calyptasapps
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Android apps designed for everyday life
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          We create practical, simple, and enjoyable Android applications for
          productivity, creativity, entertainment, and daily use.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en"
            target="_blank"
            className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Our Apps
          </a>

          <a
            href="mailto:calyptasapps@gmail.com?subject=Contact%20from%20Calyptasapps%20Website&body=Hello%20Calyptasapps,"
            className="rounded-full border border-slate-700 px-8 py-4 font-semibold transition hover:bg-slate-900"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Apps Section */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Applications</h2>

          <p className="mt-4 text-slate-400">
            Apps published on Google Play by Calyptasapps
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.link}
              target="_blank"
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="mb-4 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                {app.category}
              </div>

              <h3 className="text-xl font-bold leading-7">{app.name}</h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {app.description}
              </p>

              <div className="mt-6 font-semibold text-cyan-400">
                Open in Google Play →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">About Calyptasapps</h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Calyptasapps is an independent Android app development studio
            focused on building useful and user-friendly mobile applications.
            Our goal is to create apps that make everyday tasks easier,
            smarter, and more enjoyable.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 text-center">
        <h3 className="text-xl font-bold">Calyptasapps</h3>

        <p className="mt-3 text-slate-400">
          Android apps crafted with care from Bangladesh.
        </p>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://play.google.com/store/apps/developer?id=Calyptas+Apps&hl=en"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            Google Play
          </a>

          <a
            href="mailto:calyptasapps@gmail.com"
            className="text-cyan-400 hover:underline"
          >
            Email
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Calyptasapps. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
