# Personal Technical Profile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive personal technical profile homepage that presents engineering focus, capabilities, projects, principles, and a GitHub contact path.

**Architecture:** Keep profile concepts and static content in the domain/infrastructure boundary, build a homepage view model in the application layer, and render it only from presentation components. The composition root is the sole wiring point, so domain and application code remain independent from DOM APIs.

**Tech Stack:** Vite 7, native ES modules, HTML, CSS.

**Spec:** `docs/superpowers/specs/2026-10-28-personal-technical-profile-design.md`

## Global Constraints

- Do not add runtime dependencies, a backend, or a content-management system.
- Do not invent personal employers, clients, results, or external project links.
- Preserve a keyboard-accessible, mobile-first static experience.
- Keep DOM access limited to `src/presentation/`.

## Review Focus

- Narrow screens retain readable cards and a usable navigation layout; verify with responsive browser inspection in Task 4.
- Every interactive link has a visible keyboard focus state; inspect with keyboard navigation in Task 4.
- A missing optional project URL does not render a broken link; cover in Task 3's rendering check.
- Homepage content remains renderable when a capability group is empty; cover in Task 2's view-model check.
- The site builds with relative asset paths for the GitHub Pages root deployment; cover with `npm run build` in Task 4.

---

### Task 1: Define the profile domain and static adapter

**Files:**
- Create: `src/domain/profile/entities.js`
- Create: `src/infrastructure/profile/static-profile-repository.js`

**Interfaces:**
- Produces: `createProfile(data) -> Profile` and `getProfile() -> Profile`.
- Consumes: none.

- [ ] **Step 1: Define `Profile`, `CapabilityGroup`, `Project`, and `Principle` factories in `src/domain/profile/entities.js`**

- [ ] **Step 2: Implement `getProfile()` in `src/infrastructure/profile/static-profile-repository.js`**

Use clearly labelled, editable default copy; project items omit external URLs unless verified.

- [ ] **Step 3: Verify the module can be imported without DOM globals**

Run: `node --input-type=module -e "import('./src/infrastructure/profile/static-profile-repository.js').then(({ getProfile }) => console.log(getProfile().name))"`

Expected: prints the profile name.

### Task 2: Assemble a homepage view model

**Files:**
- Create: `src/application/get-homepage-view-model.js`

**Interfaces:**
- Consumes: `getProfile() -> Profile`.
- Produces: `getHomepageViewModel(profile: Profile) -> HomepageViewModel`.

- [ ] **Step 1: Implement `getHomepageViewModel(profile)` in `src/application/get-homepage-view-model.js`**

Map capabilities, projects, principles, and GitHub contact metadata into display-ready section data; preserve empty lists as empty arrays.

- [ ] **Step 2: Verify an empty capability list is retained safely**

Run: `node --input-type=module -e "import('./src/application/get-homepage-view-model.js').then(({ getHomepageViewModel }) => console.log(getHomepageViewModel({ capabilities: [] }).capabilities.length))"`

Expected: prints `0`.

### Task 3: Build atomic presentation components and composition root

**Files:**
- Create: `src/presentation/atoms.js`
- Create: `src/presentation/molecules.js`
- Create: `src/presentation/organisms.js`
- Create: `src/presentation/app.js`
- Modify: `src/scripts/main.js`

**Interfaces:**
- Consumes: `HomepageViewModel` and `getProfile()`.
- Produces: `renderApp(root: Element, viewModel: HomepageViewModel) -> void`.

- [ ] **Step 1: Implement atomic render helpers in `src/presentation/atoms.js`**

Create the reusable tag, action link, and section heading markup helpers.

- [ ] **Step 2: Implement card molecules in `src/presentation/molecules.js`**

Create capability, project, and principle card helpers; render project links only when `url` exists.

- [ ] **Step 3: Implement page-section organisms and `renderApp` in `src/presentation/organisms.js` and `src/presentation/app.js`**

- [ ] **Step 4: Replace `src/scripts/main.js` with the composition root wiring**

It imports the static adapter, application mapper, and presentation renderer, then renders into `#app`.

- [ ] **Step 5: Verify a production build completes**

Run: `npm run build`

Expected: Vite completes without errors.

### Task 4: Create the responsive visual system and inspect the published experience

**Files:**
- Modify: `src/styles/main.css`
- Modify: `index.html`

**Interfaces:**
- Consumes: semantic elements and class names emitted by presentation components.
- Produces: responsive layout, focus treatments, and theme tokens.

- [ ] **Step 1: Update `index.html` metadata and font loading hooks for the technical-profile page**

- [ ] **Step 2: Implement theme tokens, responsive grids, section treatments, and focus-visible styles in `src/styles/main.css`**

Use dark navy, electric blue, and teal accents; follow an 8px spacing rhythm and retain readable contrast.

- [ ] **Step 3: Run the full production build**

Run: `npm run build`

Expected: `dist/` is generated without errors.

- [ ] **Step 4: Inspect desktop and narrow viewport behaviour in a browser**

Expected: no horizontal overflow, visible focus indication, and all section links remain usable.

- [ ] **Step 5: Commit**

```bash
git add src index.html docs/superpowers
git commit -m "feat: add personal technical profile homepage"
```
