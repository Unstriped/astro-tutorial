// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config

export default defineConfig({
  site: "https://unstriped.github.io",
  base: "/astro-tutorial",
  integrations: [react()],
});