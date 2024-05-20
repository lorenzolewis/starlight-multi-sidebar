import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightMultiSidebar from "@lorenzo_lewis/starlight-multi-sidebar";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "🗃️ Starlight Multi-Sidebar",
      social: {
        github: "https://github.com/lorenzolewis/starlight-multi-sidebar",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Entry 3",
          items: [],
        },
        {
          label: "Entry 4",
          items: [],
        },
        {
          label: "Entry 5",
          items: [],
        },
        {
          label: "Entry 6",
          items: [],
        },
      ],
      plugins: [starlightMultiSidebar({ switcherStyle: "dropdown" })],
    }),
  ],
});
