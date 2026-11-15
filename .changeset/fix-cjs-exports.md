---
"@togana/digital-go-jp-panda-preset": patch
---

fix: CommonJS 向け exports が存在しないファイル（`dist/index.js` / `dist/index.d.ts`）を指していたのを `dist/index.cjs` / `dist/index.d.cts` に修正
