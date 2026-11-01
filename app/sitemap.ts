import type { MetadataRoute } from "next";
import { site } from "./lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{url:site,changeFrequency:"monthly",priority:1},{url:`${site}/apps/collagic`,changeFrequency:"monthly",priority:0.9},{url:`${site}/apps/text-to-voice`,changeFrequency:"monthly",priority:0.9},{url:`${site}/apps/collagic/privacy`,changeFrequency:"yearly",priority:0.3}];
}
