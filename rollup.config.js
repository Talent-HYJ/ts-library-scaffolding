import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
export default {
  input: "./src/index.ts",
  output: [
    {
      format: "cjs",
      file: "dist/lib/bundle.cjs.js"
    },
    {
      format: "es",
      file: "dist/es/bundle.esm.js"
    },
    {
      format: "umd",
      file: "dist/umd/bundle.umd.js",
      name: "bundle.umd",
    }
  ],
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
    sourceMaps()
  ]
};