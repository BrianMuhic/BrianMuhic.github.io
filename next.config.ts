import type { NextConfig } from "next";

// On GitHub Actions, GITHUB_REPOSITORY is set (e.g. "owner/repo-name").
// Use repo name as basePath for project Pages (username.github.io/repo-name).
// User Pages (repo named username.github.io) get basePath "".
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPage = !repoName || repoName.endsWith(".github.io");
const basePath = !isUserPage ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
