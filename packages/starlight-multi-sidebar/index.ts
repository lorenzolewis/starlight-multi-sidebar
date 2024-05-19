import type { StarlightPlugin } from "@astrojs/starlight/types";

const plugin: StarlightPlugin = {
  name: "starlight-multi-sidebar",
  hooks: {
    setup({ config, updateConfig }) {
      updateConfig({
        components: {
          ...config.components,
          Sidebar:
            "@lorenzo_lewis/starlight-multi-sidebar/overrides/Sidebar.astro",
        },
      });
    },
  },
};

export default plugin;
