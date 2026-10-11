// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://estante.arthur-duarte-portfolio.com.br",
  trailingSlash: "always",
  // Same IBM Plex pair as the portfolio, so both sites read as one family.
  fonts: [
    { provider: fontProviders.google(), name: "IBM Plex Sans", cssVariable: "--font-sans", weights: [400, 500, 600] },
    { provider: fontProviders.google(), name: "IBM Plex Mono", cssVariable: "--font-mono", weights: [400, 500] },
  ],
});
