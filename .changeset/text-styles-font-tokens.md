---
"@togana/digital-go-jp-panda-preset": patch
---

fix: textStyles の `fontFamily` を固定値から `fonts` トークンへの参照（`{fonts.body}` / `{fonts.code}`）に変更し、利用側で `fonts.body` / `fonts.code` を上書きした場合（next/font など）にも textStyles が追従するようにした
