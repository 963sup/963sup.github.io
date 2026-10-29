import { createProfile } from "../../domain/profile/entities.js";

export function getProfile() {
  return createProfile({
    name: "963sup",
    role: "Software Architecture · Web Systems",
    intro:
      "以清楚的邊界、可驗證的流程與最小必要複雜度，將想法交付成可靠的產品。",
    capabilities: [
      {
        name: "Architecture",
        description: "以領域語言、明確契約與責任邊界控制系統複雜度。",
        tags: ["DDD", "Hexagonal", "Contracts"],
      },
      {
        name: "Web Engineering",
        description: "從互動介面到部署流程，維持可讀、可維護與可驗證的實作。",
        tags: ["JavaScript", "Vite", "GitHub Pages"],
      },
      {
        name: "Delivery",
        description: "以小步驗證和可追蹤變更，降低交付與維運的不確定性。",
        tags: ["CI/CD", "Testing", "Minimal Diff"],
      },
    ],
    projects: [
      {
        name: "This technical profile",
        description: "以領域資料驅動的 GitHub Pages 首頁，將內容與展示邏輯分離。",
        tags: ["Vite", "Static Site", "Atomic UI"],
        url: "https://github.com/963sup/963sup.github.io",
      },
      {
        name: "Architecture-first workflow",
        description: "以需求、契約、最小實作與驗證為核心的工程工作方式。",
        tags: ["DDD", "Quality", "Delivery"],
      },
    ],
    principles: [
      { index: "01", title: "Domain before framework", description: "先釐清問題與責任，再決定工具與抽象。" },
      { index: "02", title: "Ports protect the core", description: "外部資料、DOM 與服務透過明確介面接入，避免耦合滲入核心。" },
      { index: "03", title: "Evidence over assumptions", description: "以可重複的驗證取代直覺，讓每一次變更都有依據。" },
    ],
    architecture: {
      summary: "DDD、戰略設計與六角形架構處理不同層次的決策：先決定業務邊界，再建模規則，最後才隔離技術細節。",
      lenses: [
        { title: "Strategic Design", description: "劃分 Domain、Subdomain 與 Bounded Context，讓每個模型在明確邊界內有效。" },
        { title: "Tactical Design", description: "在領域內選擇 Entity、Value Object、Aggregate 與不變條件，表達真正的業務規則。" },
        { title: "Hexagonal Architecture", description: "透過 Ports & Adapters 保護核心業務，隔離資料庫、HTTP、API 與框架。" },
      ],
      contexts: [
        { title: "Ordering Context", responsibility: "負責訂單生命週期與訂單規則。" },
        { title: "Payment Context", responsibility: "負責付款狀態、交易與退款規則。" },
        { title: "Inventory Context", responsibility: "負責可用量與庫存保留規則。" },
      ],
      steps: [
        { title: "Business discovery", description: "從事件、流程、規則與共通語言開始，理解問題而非先選框架。" },
        { title: "Strategic design", description: "劃分 Subdomain 與 Bounded Context，建立模型有效範圍與協作關係。" },
        { title: "Core domain modelling", description: "識別 Aggregate、Entity、Value Object 與不可違反的業務規則。" },
        { title: "Architecture design", description: "只在外部依賴變化風險值得時，以 Ports & Adapters 保護核心。" },
        { title: "Incremental validation", description: "先完成一條端到端流程，再根據證據延伸模型與邊界。" },
      ],
      pitfalls: ["Bounded Context 不等於微服務", "不是每個模組都需要完整 Ports & Adapters", "先設計領域，再決定技術結構"],
    },
    contact: { githubUrl: "https://github.com/963sup", label: "View GitHub" },
  });
}
