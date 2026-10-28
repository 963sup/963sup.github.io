import test from "node:test";
import assert from "node:assert/strict";

import { getHomepageViewModel } from "../src/application/get-homepage-view-model.js";
import { getProfile } from "../src/infrastructure/profile/static-profile-repository.js";
import { renderProjectCard } from "../src/presentation/molecules.js";

test("static profile exposes identity and project data", () => {
  const profile = getProfile();

  assert.equal(typeof profile.name, "string");
  assert.ok(profile.name.length > 0);
  assert.ok(profile.projects.length > 0);
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
