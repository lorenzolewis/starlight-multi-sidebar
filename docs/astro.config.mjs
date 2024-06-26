import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightMultiSidebar from "@lorenzo_lewis/starlight-multi-sidebar";
import starlightLinksValidatorPlugin from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://starlight-multi-sidebar.pages.dev",
  integrations: [
    starlight({
      title: "🗄️ Starlight Multi-Sidebar",
      social: {
        github: "https://github.com/lorenzolewis/starlight-multi-sidebar",
      },
      sidebar: [
        {
          label: "Docs",
          autogenerate: { directory: "docs" },
        },
        {
          label: "Samples",
          autogenerate: { directory: "sample" },
          badge: "Demo",
        },
      ],
      plugins: [
        starlightMultiSidebar({ switcherStyle: "horizontalList" }),
        starlightLinksValidatorPlugin(),
      ],
    }),
  ],
});
