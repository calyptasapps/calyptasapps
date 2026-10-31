# Calyptas Apps website refresh — 31 October 2026

Owner requested website updates and use of the new domain across relevant app profiles. Existing stack: Next.js 16.2.6 / React 19.2.4, Vercel deployment from calyptasapps/calyptasapps main.

Design: retain studio identity and dark base; navy (#15233b), blue (#336edc), pale blue (#d9e9ff), white (#fff), muted slate (#b0bdd0). Geist for legible interface/body type, oversized restrained headings. One expressive photo composition, with a quiet surrounding layout. Home showcases Collagic while retaining the other seven app cards. Dedicated /apps/collagic is a reusable model for future app pages.

Changes: direct attributed Collagic Play links, approved eight screenshots and four exported designs, click-to-load privacy-enhanced YouTube promo, truthful free/ad limitations and support/privacy links, metadata/canonicals/Open Graph/SoftwareApplication/Organization structured data, sitemap and robots. Original root app-ads.txt retained byte-for-byte. Other app card links are clearly labelled as developer-collection links until individual packages are verified.

Approved source assets: the private NewCollagic repository (Play Store upload package and promo assets). Existing AI demo photographs disclosed. WebP derivatives resized and compressed for delivery; no fabricated UI. Music credits remain with the already-hosted YouTube video; no media reupload.

Tracking: each direct Play CTA contains an encoded install referrer with source calyptasapps_website, medium referral, campaign collagic and placement. Reporting remains subject to Google thresholds; this does not instrument a new analytics SDK or prove installs.

Deployment, browser QA and external-link verification recorded after completion. No paid services or campaigns enabled.

## Local verification
- npm run lint passed; optimized Next.js build passed with static home/app, icon, robots and sitemap routes.
- Playwright checked home and Collagic at 320, 390, 768 and 1440 px: no horizontal page overflow, one H1, all images load, meaningful links, canonical tags, video activation and FAQ expansion work. Public app-ads.txt / robots / sitemap / icon return 200.
- Visually inspected desktop home/Collagic and smallest-phone Collagic. Reduced mobile hero heading after inspection to bring photos higher.
- All 14 approved media derivatives total approximately 1.1 MB on disk; lazy image loading and next/image sizing limit initial downloads.
