/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/DevDash', // only needed for project pages (username.github.io/repo-name)
  images: { unoptimized: true }, // GH Pages can't run the image optimizer
};

module.exports = nextConfig;