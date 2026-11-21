# Project architecture

- Keep performance-specific ticket URLs in the shared show data because repeated titles have distinct performances; render all card photographs centered with cover fitting to avoid empty image-area bands.

- Store uploaded images as real files under `src/assets` and import their Vite URLs directly; never create asset JSON pointers, because self-hosted deployments must serve images without Lovable infrastructure.
