import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
};

export default withSentryConfig(nextConfig, {
  org: "javascript-mastery",
  project: "care-pulse",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
