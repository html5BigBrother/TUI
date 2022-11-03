import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false, // 禁用最小化混淆
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "index.ts"),
      name: 'TUIUtils', // iife全局变量名
      // the proper extensions will be added
      fileName: "index", // 默认package.json的name
      formats: ["es","umd"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: [
        {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
          format: "umd",
          dir: "dist/lib",
        },
        {
          format: "es",
          dir: "dist/es",
        },
      ],
    },
  },
});
