---
"example-next": patch
"example-studio": patch
---

examples が動かなくなっていたので修正
 - 存在しなくなった textStyle を参照していた
 - tudio build すると @oslojs/encoding を追加しないと動かなくなっていた
