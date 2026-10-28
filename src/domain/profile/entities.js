export function createProfile({
  capabilities = [],
  contact = {},
  intro = "",
  name = "",
  principles = [],
  projects = [],
  role = "",
}) {
  return { capabilities, contact, intro, name, principles, projects, role };
}
