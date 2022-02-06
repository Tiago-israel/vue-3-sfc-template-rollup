import vue from "rollup-plugin-vue";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss'

export default {
  input: "src/index.js",
  output: {
    file: "dist/header.js",
    name: "header",
    format: "cjs",
  },
  external: ["vue"],
  plugins: [
    vue(),
    postcss(),
    getBabelOutputPlugin({
      presets: ["@babel/preset-env"],
    }),
    terser(),
  ],
};
