import { escapeHtml, renderAction, renderTag } from "./atoms.js";

const renderTags = (tags = []) => `<div class="tag-list">${tags.map(renderTag).join("")}</div>`;

export function renderCapabilityCard({ description, name, tags }) {
  return `<article class="card capability-card"><h3>${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p>${renderTags(tags)}</article>`;
}

export function renderProjectCard({ description, name, tags, url }) {
  return `<article class="card project-card"><div><p class="card-kicker">Selected work</p><h3>${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p></div>${renderTags(tags)}${url ? renderAction({ href: url, label: "Explore" }) : ""}</article>`;
}

export function renderPrincipleCard({ description, index, title }) {
  return `<article class="principle-card"><span>${escapeHtml(index)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></article>`;
}
