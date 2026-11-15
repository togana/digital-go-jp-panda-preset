# Changesets

## PR には必ず changeset を含める

- PR を作るときは、変更内容にかかわらず必ず `.changeset/*.md` を 1 つ以上含める
- changeset は main にマージされたあと Changesets ワークフローが Version Packages PR を作るために使う。changeset がないとその PR の変更はリリース履歴に残らない

## 種類の選び方

- パッケージ（`packages/digital-go-jp-panda-preset`）の挙動・公開 API・依存関係が変わる場合: `pnpm changeset` で `@togana/digital-go-jp-panda-preset` を選び、次の基準で bump を決める
  - 0.x の間（現在）
    - 破壊的変更: `minor`（`feat!` など。例: Panda CSS v2 対応の 0.0.37 → 0.1.0）
    - 機能追加・バグ修正・依存更新: `patch`
    - `^0.1.0` は 0.1.x にしか解決されないので、0.x の `minor` は利用者にとって `major` と同じになる。破壊的変更でないものを `minor` にすると、利用者が手で上げるまで届かない
  - 1.0.0 以降: semver どおり（破壊的変更は `major`、機能追加は `minor`、バグ修正・依存更新は `patch`）
- パッケージの公開物に影響しない変更（CI、ルール・ドキュメント、examples、ルートの開発用設定など）: `pnpm changeset --empty` で空の changeset を作る。npm に中身の同じ新バージョンを出さないため

## 書き方

- サマリは日本語で、利用者に何が変わるかを 1〜2 文で書く（CHANGELOG.md にそのまま載る）
- 空の changeset もフロントマター（`---` `---`）の下に変更内容を 1 行書く
- PR 作成前に `.changeset/` に自分の変更用のファイルがあることを確認する
