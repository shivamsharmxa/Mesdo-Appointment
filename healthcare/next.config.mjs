import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during builds
  },
  sentry: {
    hideSourceMaps: false, // Set to false if you want source maps for debugging
  },
};

export default withSentryConfig(nextConfig, {
  org: "javascript-mastery",
  project: "care-pulse",
  silent: false, // Set to false to enable logs for debugging
  widenClientFileUpload: true,
  hideSourceMaps: false, // Allow source maps for better debugging
  disableLogger: false, // Enable logs
  automaticVercelMonitors: true,
});
