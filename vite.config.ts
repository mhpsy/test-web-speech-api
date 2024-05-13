import { defineConfig } from "vite";
import {viteSingleFile} from "vite-plugin-singlefile";
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode, command }) => {
    return {
        base: command === "build" ? "/lenovo-component" : "/lenovo-component",
        server: {
            port: 90,
            host: true,
        },
        plugins: [viteSingleFile(),createHtmlPlugin({
            minify: true,
        })],
    };
});
