---
paths:
  - "packages/digital-go-jp-panda-preset/**"
---

# @digital-go-jp/design-tokens の更新への追従

`@digital-go-jp/design-tokens` のバージョンを上げるとき（Renovate の PR を仕上げるときも含む）の手順。

## 何が自動で反映され、何が反映されないか

- プリセットは上流の値を `tokens.<Category>.<Key>.$value` で読んでいる。**値の変更**はバージョンを上げるだけで反映される
- **キーの追加**は反映されない。プリセット側でキーを 1 つずつ列挙しているため、追加しないと公開されない
- **キーの削除・改名**は `pnpm typecheck` で落ちる
- `letterSpacings`、`textStyles`、`breakpoints`、`sizes`、`spacing` は上流パッケージにはなく、[デザインシステムのサイト](https://design.digital.go.jp/foundations/)を見て手で定義している。上流パッケージの差分には出ないので、サイトの更新は別に確認する

## 上流とプリセットの対応

| 上流                                         | プリセット                                                      |
| -------------------------------------------- | --------------------------------------------------------------- |
| `Color.Primitive.*`                          | `src/colors/primitive.ts`（色相名は kebab-case: `LightBlue` → `light-blue`） |
| `Color.Neutral.White` / `Black` / `SolidGray` | `src/colors/primitive.ts`（`white` / `black` / `grey`）         |
| `Color.Key`                                  | `src/colors/primitive.ts` の `key`（`keyColor()` で `{colors.blue.N}` への参照に変換） |
| `Color.Semantic.*`                           | `src/colors/semantic.ts`（`focus-*` は `Color.Primitive` から作る） |
| `FontFamily.Sans` / `Mono`                   | `src/typography/fonts.ts`（`body` / `code`）                    |
| `FontSize`                                   | `src/typography/font-sizes.ts`                                  |
| `FontWeight` 400 / 700                       | `src/typography/font-weights.ts`（`N` / `B`）                   |
| `LineHeight`                                 | `src/typography/line-heights.ts`                                |
| `BorderRadius`                               | `src/radii.ts`                                                  |
| `Elevation`                                  | `src/shadows.ts`                                                |

## 手順

### 1. バージョン間の差分を見る

一時ディレクトリに新旧のパッケージを展開して比べる。`tokens.d.ts` の差分でキーの増減、`tokens-simple.css` の差分で値の変更がわかる。

```bash
cd "$(mktemp -d)" && mkdir old new
npm pack @digital-go-jp/design-tokens@<旧> @digital-go-jp/design-tokens@<新> --silent
tar -xzf digital-go-jp-design-tokens-<旧>.tgz -C old && tar -xzf digital-go-jp-design-tokens-<新>.tgz -C new
diff -u old/package/dist/tokens.d.ts new/package/dist/tokens.d.ts
diff -u old/package/dist/tokens-simple.css new/package/dist/tokens-simple.css
```

あわせて上流のリリースノート（`gh release view v<新> -R digital-go-jp/design-tokens`）も読む。

### 2. 取り込み漏れを確認する

バージョン間の差分には、以前からあったのに取り込んでいないトークンは出てこない（例: `Color.Key` は 2.0.0 からあったが、取り込んだのは 2.1.0 に追従したとき）。パッケージディレクトリで次を実行し、プリセットが参照していない上流のトークンを一覧する。

```bash
node <<'EOF'
const fs = require('node:fs');
const tokens = require('@digital-go-jp/design-tokens');
const walk = (o, p) => ('$value' in o ? [p] : Object.entries(o).flatMap(([k, v]) => walk(v, p ? `${p}.${k}` : k)));
const src = fs.readdirSync('src', { recursive: true })
  .filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts'))
  .map((f) => fs.readFileSync(`src/${f}`, 'utf8'))
  .join('\n')
  .replace(/\[\s*'?(\w+)'?\s*\]/g, '.$1');
const escape = (s) => s.replaceAll('.', '\\.');
console.log(walk(tokens, '').filter((p) => !new RegExp(`tokens\\.${escape(p)}\\b`).test(src)).join('\n'));
EOF
```

- `Color.Key.*` は `keyColor()` で動的に参照しているため一覧に出るが、取り込み済み
- それ以外に出たものは、取り込むか、意図的に入れないかを判断する。入れない場合は理由を対応するファイルにコメントで残し、次回からの確認で迷わないようにする

### 3. プリセットに反映する

- キーの追加: [coding-conventions.md](coding-conventions.md) の「新しいトークンを追加するとき」に従う
- キーの削除・改名: 対応するキーを直す。プリセットのトークン名が変わる、または消える場合は利用者のコードが壊れる
- 値だけの変更: `src/` の変更は不要。ただし `examples/` が上流と同じ値を直書きしていないか確認する（例: `examples/next/panda.config.ts` の `fonts.body` は `next/font` の変数に上流のフォールバックを足して書いている）
- 上流のエイリアス（`original.$value` が `{Color.Primitive.…}` のもの）は、値をコピーせず Panda のトークン参照（`{colors.…}`）にして、利用者が参照先を差し替えられるようにする（`keyColor()` が例）

### 4. 確認とドキュメント

- パッケージディレクトリで `pnpm ci` を通す
- 利用者向けの使い方が変わるなら `packages/digital-go-jp-panda-preset/README.md` を更新する
- トークン一覧は Panda Studio（`examples/studio`）で公開している。新しいカテゴリを増やしたときは表示されるか確認する

### 5. changeset を書く

[changesets.md](changesets.md) に従う。design-tokens の更新では次の基準で bump を決める。

- 値の変更だけ: `patch`
- トークンの追加: `minor`
- トークンの削除・改名: 破壊的変更

値の変更は利用者の見た目が変わるので、どのトークンの値が何から何に変わったかをサマリに書く（例: 0.1.0 の「`fonts.body` から `-apple-system, BlinkMacSystemFont` が外れ」）。
