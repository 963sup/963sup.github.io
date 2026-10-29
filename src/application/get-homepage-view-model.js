export function getHomepageViewModel(profile) {
  return {
    architecture: profile.architecture ?? { contexts: [], lenses: [], pitfalls: [], steps: [], summary: "" },
    capabilities: profile.capabilities ?? [],
    contact: profile.contact ?? {},
    intro: profile.intro ?? "",
    name: profile.name ?? "",
    principles: profile.principles ?? [],
    projects: profile.projects ?? [],
    role: profile.role ?? "",
  };
}
