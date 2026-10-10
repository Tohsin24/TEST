const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = "TEST";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repo}` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
