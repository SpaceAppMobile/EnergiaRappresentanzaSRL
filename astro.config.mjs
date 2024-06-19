import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  integrations: [
  // tailwind({
  //   applyBaseStyles: false,
  // }),
  tailwind(), react(), svelte(), sanity({
    projectId: "xzyslyix",
    dataset: "clienti",
    // Set useCdn to false if you're building statically.
    useCdn: false,
    // Access the Studio on your.url/admin
    studioBasePath: "/admin"
  })],
  output: "server",
  adapter: vercel()
});