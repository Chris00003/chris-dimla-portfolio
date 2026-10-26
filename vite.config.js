import { defineConfig } from 'vite';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgSite = repositoryName?.endsWith('.github.io') ?? false;
const base = isGitHubActions && repositoryName && !isUserOrOrgSite
  ? `/${repositoryName}/`
  : '/';

export default defineConfig({
  base,
  server: { host: '0.0.0.0' },
  preview: { host: '0.0.0.0' },
});
