export function createProfile({
  architecture = { lenses: [], pitfalls: [], steps: [], summary: "" },
  capabilities = [],
  contact = {},
  intro = "",
  name = "",
  principles = [],
  projects = [],
  role = "",
}) {
  return { architecture, capabilities, contact, intro, name, principles, projects, role };
}
