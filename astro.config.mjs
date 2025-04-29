// @ts-check
import { defineConfig } from "astro/config";
import VitePWA from "@vite-pwa/astro";

export default defineConfig({
  site: "https://bcondict.github.io",
  base: "bloque-techTest-monolithic",
  integrations: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Bloque tech test",
        short_name: "App",
      },
    }),
  ],
});
