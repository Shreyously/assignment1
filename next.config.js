/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Ensure proper cache handling in development
    if (dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        // Increase cache version to force a clean rebuild
        version: '1.0.0',
        compression: false,
        buildDependencies: {
          config: [__filename]
        }
      };
    }
    return config;
  }
}

module.exports = nextConfig