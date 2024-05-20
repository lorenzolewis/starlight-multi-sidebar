---
"@lorenzo_lewis/starlight-multi-sidebar": minor
---

⚠️ Breaking change

The `starlight-multi-sidebar` config will need to be updated to call the function that is now returned:

```diff
export default defineConfig({
  integrations: [
    starlight({
      title: "🗃️ Starlight Multi-Sidebar",
+     plugins: [starlightMultiSidebar()],
-     plugins: [starlightMultiSidebar],
    }),
  ],
});
```

A new dropdown style selector is now available. This can be useful for when the content of a sidebar is too wide to fit comfortably on one line. To use it specify the `switcherStyle: "dropdown"` option in the `starlight-multi-sidebar` config:

```ts
export default defineConfig({
  integrations: [
    starlight({
      title: "🗃️ Starlight Multi-Sidebar",
      plugins: [
        starlightMultiSidebar({
          switcherStyle: "dropdown",
        }),
      ],
    }),
  ],
});
```
