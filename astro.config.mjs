// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  adapter: vercel({
    imageService: true,
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
