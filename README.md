# my-website

以 Vite 建置並透過 GitHub Actions 發佈至 GitHub Pages 的靜態網站。

## 結構

```text
.
├── .github/workflows/deploy-pages.yml  # Pages 自動部署
├── public/                             # 原樣複製至建置產物的公開資源
│   └── assets/
├── src/                                # 開發原始碼
│   ├── components/                     # 可重用元件
│   ├── scripts/main.js
│   └── styles/main.css
├── index.html                          # 網站首頁
├── package.json
├── vite.config.js
└── README.md
```

## 發佈設定

在 GitHub 儲存庫的 **Settings → Pages**，將 **Build and deployment** 的來源設為 **GitHub Actions**。推送至 `main` 後，工作流程會自動安裝依賴、建置 `dist/` 並部署。

若網站部署在專案頁面（`https://<owner>.github.io/<repository>/`），請讓站內連結使用相對路徑，例如 `assets/css/main.css`，不要使用以 `/` 開頭的絕對路徑。

## 本機預覽

```bash
npm install
npm run dev
```
