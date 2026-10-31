export const site = "https://www.calyptasapps.com";
export const support = "calyptasapps@gmail.com";
export const developer = "https://play.google.com/store/apps/developer?id=Calyptas+Apps";
export const privacy = "https://www.calyptasapps.com/apps/collagic/privacy";
export function collagicDownload(placement: string) {
  const referrer = new URLSearchParams({ utm_source: "calyptasapps_website", utm_medium: "referral", utm_campaign: "collagic", utm_content: placement });
  return `https://play.google.com/store/apps/details?id=com.calyptasapps.collagic&referrer=${encodeURIComponent(referrer.toString())}`;
}
export const screenshots = [
  ["01-worth-framing", "Make a collage your way", "A magazine-style collage inside the real dark-mode Collagic editor"],
  ["02-travel-keepsakes", "Keep the whole adventure", "Travel diary collage with photos, captions and decorative details"],
  ["03-explore-layouts", "Find a layout you love", "Collagic's grid and Magic layout choices"],
  ["04-set-the-mood", "Set the mood", "Background colours, gradients and patterns in Collagic"],
  ["05-photo-tools", "Refine every photo", "Photo crop, frames and background tools in Collagic"],
  ["06-filters", "Find your look", "Photo filter options in the dark-mode editor"],
  ["07-photo-or-video", "Save a photo or video", "Photo and animated video export options"],
  ["08-save-and-share", "Share the story", "A saved travel collage on Collagic's sharing screen"],
] as const;
