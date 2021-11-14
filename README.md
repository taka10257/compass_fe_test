# COMPASS課題

## 本番環境

https://tsuzuki-compass-fe-test.vercel.app/

---

## 環境

- yarn@1.22.17
- node@14.18.1

### test

- jest

### lint

- eslint

### format

- prettier

---

## 開発環境セットアップ

### env ファイル作成

```shell
touch .env.local
```

- env ファイルにパラメーターを追加

```
API_ENDPOINT=<API ENDPOINT URL>
```

### アプリケーション起動

```shell
yarn dev
```

- [http://localhost:3000](http://localhost:3000) にアクセス

---

## コマンド

### テスト

```shell
yarn test
```

テストカバレッジ確認

```shell
yarn test-coverage
```

### lint

```shell
yarn lint
```

自動修正込み

### format

```shell
yarn format
```

### 本番環境動作確認

```shell
yarn build && yarn start
```

---

# 説明

## コンポーネント

- `atomic design` を意識して作成しました
- コンポーネントのサイズ・マージンなどは呼び出し側で指定することを前提としています。

## ページネーション

- `react-paginate` を利用しました。

## 一覧テーブル

- `react-bootstrap-table-next` を利用しました。
  - ブラウザコンソールに以下の警告が出ます。
  - このモジュールに問題がありそうですが、モジュールの入れ替えの余裕がなかったので、警告が出ます。
  - 参考: https://teratail.com/questions/252889

```
Warning: Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: DataProvider
```

## state 管理

- [flux パターン](https://qiita.com/knhr__/items/5fec7571dab80e2dcd92) を意識して作成しました。
  - 基本パターン通りに作成されていないですが、概念はそんなに間違っていない気がしています。

## API コール

- 一応エンドポイントを隠蔽できる構成にしました。

## テスト

- 余裕なかったのでほとんど作成できませんでした。
