/**
 * PM2: Nest (3001) only.
 * Frontend runs as Docker container from prebuilt image.
 */
const path = require("path");

const root = __dirname;
const be = path.join(root, "rom-consult-be");

module.exports = {
    apps: [
        {
            name: "romconsult-api",
            cwd: be,
            script: "dist/main.js",
            interpreter: "node",
            node_args: "--env-file=.env",
            instances: 1,
            exec_mode: "fork",
            max_memory_restart: "512M",
        },
    ],
};
