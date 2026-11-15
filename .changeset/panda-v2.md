---
"@togana/digital-go-jp-panda-preset": minor
"example-next": minor
"example-studio": minor
---

feat!: Panda CSS v2 に対応

- 型定義を `@pandacss/types` 2.5.0 に更新し、devDependencies に移動（ビルド後の型定義には残らないため）。`peerDependencies` に `@pandacss/dev: ^2.0.0` を追加
- Panda CSS v2 ではプリセットが自動で追加されないため、利用側で `presets: ['@pandacss/preset-base', preset]` のように `@pandacss/preset-base` を明示的に指定してください（README 参照）
- Panda CSS v1 を使う場合は 0.0.37 を利用してください
