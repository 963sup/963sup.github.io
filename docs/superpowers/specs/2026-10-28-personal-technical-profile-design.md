# 個人技術名片首頁設計

## 意圖

將目前僅有標題的 GitHub Pages 首頁，改為可快速理解個人技術取向與工程方法的單頁技術名片。

## 目標

- 呈現自我定位、能力領域、精選專案、架構原則與聯絡入口。
- 以結構化領域資料驅動頁面內容，讓後續替換個人資訊與新增專案不需改動呈現元件。
- 在不新增框架或後端的前提下，建立可辨識的 DDD、六角形與原子化 UI 邊界。
- 維持手機優先、鍵盤可操作與足夠色彩對比的靜態網站。

## 非目標

- 不建立登入、資料庫、CMS、追蹤分析或聯絡表單後端。
- 不虛構任職經歷、客戶、成果數字或專案連結。
- 不為單頁網站引入依賴注入框架、事件匯流排或多餘抽象。

## 選定方案

採用「個人技術名片」：首屏說明技術定位，後續章節依序提供能力、專案展示、工程原則與 GitHub 聯絡入口。

替代方案為純架構展示站（偏技術圖解）與部落格入口（偏內容管理）；前者弱化個人介紹，後者需要尚未提供的文章內容，故未採用。

## 結構與責任

```text
src/
├── domain/profile/           # Profile、Skill、Project、Principle 等領域資料與型別
├── application/              # 將領域資料組裝為首頁 view model
├── infrastructure/           # 靜態 profile 資料的 adapter
└── presentation/
    ├── atoms/                # Tag、Button、Section heading 等最小元件
    ├── molecules/            # Skill card、Project card 等組合元件
    ├── organisms/            # Hero、Skills、Projects、Principles、Footer 區塊
    └── app.js                # Composition root：呼叫 application 層並渲染
```

領域與應用層不依賴 DOM；基礎設施層實作資料來源；Presentation 是唯一使用 DOM 與 CSS 的 adapter。入口檔僅負責組合依賴。

## 內容與視覺

- 深藍黑為基底、電藍與青綠為重點色，搭配等寬字體作為技術細節點綴。
- 使用導覽、首屏、能力、精選專案、架構原則、行動呼籲六個區段。
- 個人描述採可明確標示為可編輯的預設文案；專案卡不連至未驗證的外部作品。

## 驗證

- 執行 `npm run build`。
- 檢查首頁的地標、標題階層、連結、鍵盤焦點與窄螢幕排版。
