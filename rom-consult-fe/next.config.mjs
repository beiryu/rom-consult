import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    turbopack: {
        root: fileURLToPath(new URL(".", import.meta.url)),
    },
    experimental: {
        // Barrel-import optimization: fewer modules for Turbopack to resolve (faster compile, often less peak memory).
        optimizePackageImports: [
            "@untitledui/icons",
            "@untitledui/file-icons",
            "react-aria-components",
            "react-aria",
            "@react-aria/utils",
            "@react-stately/utils",
            "recharts",
            "motion",
        ],
        // Persist Turbopack artifacts between builds (repeat CI/deploy builds are faster when .next/cache is kept).
        turbopackFileSystemCacheForBuild: true,
    },
};

export default nextConfig;
