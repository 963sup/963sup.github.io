export function escapeHtml(value = "") {
  return String(value).replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  })[character]);
}

export function renderTag(label) {
  return `<span class="tag">${escapeHtml(label)}</span>`;
}

export function renderSectionHeading(eyebrow, title, description) {
  return `<div class="section-heading"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p></div>`;
}

function sanitizeUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "#";
  } catch {
    return "#";
  }
}

export function renderAction({ href, label, secondary = false }) {
  return `<a class="action${secondary ? " action--secondary" : ""}" href="${escapeHtml(sanitizeUrl(href))}" target="_blank" rel="noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
}
