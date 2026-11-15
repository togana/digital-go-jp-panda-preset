---
'@togana/digital-go-jp-panda-preset': patch
---

textStyles の fontWeight・fontSize・lineHeight・letterSpacing をトークン参照にし、`theme.extend` でこれらのトークンを上書きしたときに textStyles にも反映されるようにする。
