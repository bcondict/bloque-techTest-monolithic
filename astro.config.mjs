// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  site: "https://bcondict.github.io",
  base: "bloque-techTest-monolithic",
});

