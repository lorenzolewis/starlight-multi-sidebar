---
"@lorenzo_lewis/starlight-multi-sidebar": patch
---

Improve a11y and pass through any Starlight `attrs` sidebar attributes.

⚠️ Potentially Breaking Change

This refactors the underlying `<HorizontalList>` component and could result in some breaking changes if specifically targeting any of those attributes.

In the future it _may_ be possible to theme the respective components via exposed APIs that will follow semver.
