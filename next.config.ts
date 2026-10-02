import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "sj-emr-redesign";
  repo = `/${repoName}`;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : (isGithubActions ? repo : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    loader: "custom",
    loaderFile: "./src/image-loader.ts",
  },
};

export default nextConfig;
