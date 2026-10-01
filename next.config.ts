import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "sj-emr-redesign";
  repo = `/${repoName}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? repo : ""),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
