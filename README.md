# Menumatic

A React project with Webpack, Tailwind CSS, ESLint, Prettier, Husky, Commitizen, and automated commit quality checks.

## Project Setup

### 1. Install dependencies
```sh
npm install
```

### 2. Development server
```sh
npm start
```
- Runs the app in development mode at http://localhost:3000

### 3. Production build
```sh
npm run build
```
- Outputs static files to the `build/` directory.

### 4. Serve production build locally
```sh
npx serve build
```

## Tailwind CSS Usage

This project uses [Tailwind CSS v4+](https://tailwindcss.com/) for utility-first styling.

- Tailwind is configured via `tailwind.config.js` and integrated with PostCSS and Webpack.
- The main stylesheet is `src/index.css`, which includes:
  ```css
  @import "tailwindcss/preflight";
  @tailwind utilities;
  ```
- Use Tailwind utility classes directly in your React components for styling.
- To customize the design system (colors, fonts, etc.), edit `tailwind.config.js`.
- For custom CSS, add it below the Tailwind imports in `src/index.css`.
- When adding new components or pages, ensure their file paths are included in the `content` array in `tailwind.config.js` for full utility support.

Example usage in a component:
```jsx
<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold mb-4">Menumatic is Under Creative Construction</h1>
  {/* ... */}
</div>
```

## Code Quality & Automation

### ESLint & Prettier
- ESLint and Prettier are configured for code linting and formatting.
- ESLint is set to disallow semicolons and uses recommended React rules.
- Prettier is set to use single quotes, no semicolons, and 2-space tabs.

### Husky & lint-staged
- Husky runs a pre-commit hook:
  - Runs ESLint and Prettier (via lint-staged) on staged files.
  - Runs tests (`npm test`).
  - Blocks commit if lint, format, or tests fail.
- Husky also runs a commit-msg hook to enforce Conventional Commits via Commitlint.

### Commitizen
- Use `npm run commit` for interactive, Conventional Commit-style commit messages.
- After a successful commit, changes are automatically pushed to the remote repository.

### Test & Coverage
- Run all tests:
  ```sh
  npm test
  ```
- Run tests with coverage (minimum 85% per file required to commit):
  ```sh
  npm run test:coverage
  ```
- If coverage is below 85% for any file, the commit will be blocked.

## Automated Commit Process
1. Stage your changes: `git add .`
2. Run the commit script:
   ```sh
   npm run commit
   ```
   - Prompts for a Conventional Commit message.
   - Runs lint, format, and tests.
   - Checks commit message format.
   - If all checks pass, automatically pushes to remote.

---

For any issues, check the output in your terminal for details on what failed (lint, format, tests, or commit message).
