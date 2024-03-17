import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";

const excludeDocxPlugin: Plugin = {
  name: "exclude-docx",
  enforce: "pre",
  apply: "build",
  config() {
    return {
      resolve: {
        conditions: ["!*.docx"],
      },
    };
  },
};

export default defineConfig({
  plugins: [react(), excludeDocxPlugin],
  assetsInclude: "**/*.docx",
});
