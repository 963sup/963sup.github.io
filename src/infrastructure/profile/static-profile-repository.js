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
    contact: { githubUrl: "https://github.com/963sup", label: "View GitHub" },
  });
}
