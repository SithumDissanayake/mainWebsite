/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
const isProd = process.env.NODE_ENV === 'production';

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable default image optimization
    },
    assetPrefix: isProd ? '/' : '',
    basePath: isProd ? '' : '',
    output: 'export'
};

export default config;
