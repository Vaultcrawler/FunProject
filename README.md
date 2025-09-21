# Copilot Testing Node.js + TypeScript Project

## Setup

1. Install dependencies (already done):
   ```sh
   npm install
   ```
2. Compile TypeScript:
   ```sh
   npx tsc
   ```
3. Run the compiled JavaScript:
   ```sh
   node index.js
   ```

## Project Structure
- `index.ts`: Main TypeScript entry point
- `tsconfig.json`: TypeScript configuration
- `package.json`: Node.js project config


## GitHub Pages Deployment

This project is configured for deployment to GitHub Pages. The production build output is placed in the `docs` directory, which is published to the `gh-pages` branch using the `gh-pages` npm package.

### Deploy Steps

1. Build the project for production:
   ```sh
   npm run build:prod
   ```
2. Deploy to GitHub Pages:
   ```sh
   npm run deploy
   ```

Your site will be available at:

```
https://<your-github-username>.github.io/<your-repo-name>/
```

Replace `<your-github-username>` and `<your-repo-name>` with your actual GitHub username and repository name.

---

You can add scripts to `package.json` for build/run automation.

---

This is a minimal Node.js project with TypeScript support. Modify as needed for your application.
