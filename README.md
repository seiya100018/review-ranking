# レビュー数ランキング — デプロイ手順

## 必要なもの
- Google Places API キー（Places API (New) を有効化済み）
- GitHubアカウント（無料）
- Vercelアカウント（無料）

---

## ステップ1：GitHubアカウントを作る

1. https://github.com を開く
2. 右上の「Sign up」をクリック
3. メールアドレス・パスワードを入力して登録

---

## ステップ2：このコードをGitHubにアップロード

1. GitHubにログイン後、右上の「+」→「New repository」をクリック
2. Repository name: `review-ranking`（任意）
3. 「Create repository」をクリック
4. 「uploading an existing file」リンクをクリック
5. このフォルダの中身を**すべて選択してドラッグ&ドロップ**
6. 「Commit changes」をクリック

---

## ステップ3：Vercelアカウントを作る

1. https://vercel.com を開く
2. 「Sign Up」→「Continue with GitHub」でGitHubアカウントと連携

---

## ステップ4：Vercelにデプロイ

1. Vercelダッシュボードで「Add New Project」をクリック
2. 先ほど作ったGitHubリポジトリを選んで「Import」
3. **「Environment Variables」セクションで以下を追加：**
   - Name: `GOOGLE_PLACES_API_KEY`
   - Value: `AIzaSy...（あなたのAPIキー）`
4. 「Deploy」をクリック

---

## ステップ5：完了

デプロイ完了後、`https://review-ranking-xxxxx.vercel.app` のようなURLが発行されます。
そのURLをブラウザで開くとアプリが使えます。

---

## APIキーの制限設定（推奨）

Google Cloud Console → 認証情報 → 該当キー：
- **HTTPリファラー制限**に `https://review-ranking-xxxxx.vercel.app/*` を追加
- **API制限**に `Places API (New)` のみ許可

---

## ローカルで動かす場合

```bash
# Node.js（v18以上）が必要
npm install
echo "GOOGLE_PLACES_API_KEY=AIzaSy..." > .env.local
npm run dev
```

ブラウザで http://localhost:3000 を開く
