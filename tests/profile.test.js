import test from "node:test";
import assert from "node:assert/strict";

import { getHomepageViewModel } from "../src/application/get-homepage-view-model.js";
import { getProfile } from "../src/infrastructure/profile/static-profile-repository.js";
import { renderProjectCard } from "../src/presentation/molecules.js";
import { renderArchitectureSection } from "../src/presentation/organisms.js";

test("static profile exposes identity and project data", () => {
  const profile = getProfile();

  assert.equal(typeof profile.name, "string");
  assert.ok(profile.name.length > 0);
  assert.ok(profile.projects.length > 0);
  assert.equal(profile.architecture.lenses.length, 3);
});

test("homepage view model preserves empty capability groups", () => {
  const viewModel = getHomepageViewModel({
    capabilities: [],
    contact: { githubUrl: "https://github.com/963sup" },
    principles: [],
    projects: [],
  });

  assert.deepEqual(viewModel.capabilities, []);
});

test("project cards omit a link when no verified URL is supplied", () => {
  const markup = renderProjectCard({
    description: "A local project.",
    name: "Project",
    tags: ["Vite"],
  });

  assert.doesNotMatch(markup, /<a /);
});

test("architecture notes distinguish strategy, tactics, and technical isolation", () => {
  const markup = renderArchitectureSection({
    lenses: [
      { description: "Business boundaries", title: "Strategic Design" },
      { description: "Business rules", title: "Tactical Design" },
      { description: "Technical details", title: "Hexagonal Architecture" },
    ],
    pitfalls: [],
    steps: [],
    summary: "Three related decisions.",
  });

  assert.match(markup, /Strategic Design/);
  assert.match(markup, /Hexagonal Architecture/);
});

test("architecture notes present bounded-context flow and a concrete example", () => {
  const markup = renderArchitectureSection({
    contexts: [{ responsibility: "Order lifecycle", title: "Ordering Context" }],
    lenses: [],
    pitfalls: [],
    steps: [{ description: "Discover events", title: "Business discovery" }],
    summary: "Start with the domain.",
  });

  assert.match(markup, /Ordering Context/);
  assert.match(markup, /Business discovery/);
});
