# Starlight Multi-Sidebar

Have multiple sidebars in your Starlight site!

## Usage

To usage this plugin do the following:

1. Add `import starlightMultiSidebar from "@lorenzo_lewis/starlight-multi-sidebar";` to the Astro config
2. Add the `starlightMultiSidebar` plugin to `integrations > starlight > plugins`
3. Define multiple sidebars at the top-level of the Starlight sidebar config entry

```ts
// astro.config.mjs
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightMultiSidebar from "@lorenzo_lewis/starlight-multi-sidebar";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightMultiSidebar],
      sidebar: [
        {
          label: "Guides",
          items: [{ label: "Example Guide", link: "/guides/example/" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
```
