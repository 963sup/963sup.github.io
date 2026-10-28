export function getHomepageViewModel(profile) {
  return {
    capabilities: profile.capabilities ?? [],
    contact: profile.contact ?? {},
    intro: profile.intro ?? "",
    name: profile.name ?? "",
    principles: profile.principles ?? [],
    projects: profile.projects ?? [],
    role: profile.role ?? "",
  };
}
