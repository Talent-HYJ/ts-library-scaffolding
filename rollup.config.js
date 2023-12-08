const typescript = require("rollup-plugin-typescript2");
const sourceMaps = require('rollup-plugin-sourcemaps')
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const autoExternal = require('rollup-plugin-auto-external')
const { terser } = require('rollup-plugin-terser')
const path = require('path')

module.exports = {
  input: './src/index.ts',
  output: [
    {
      format: "iife",
      dir: path.dirname(`dist/browser/index.js`),
      preserveModules: true,
      name: "tsDemo", // 包名 自动挂载到window
      preserveModulesRoot: "src",
    },
    {
      format: "iife",
      name: "tsDemo",
      file: "dist/browser/index.min.js",
      plugins: [terser()],
    },
    {
      format: 'cjs',
      dir: path.dirname(`dist/lib/index.cjs.js`),
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      format: 'cjs',
      file: 'dist/lib/index.cjs.min.js',
      plugins:[terser()]
    },
    {
      format: 'es',
      dir: path.dirname('dist/es/index.esm.js'),
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      format: 'es',
      file: 'dist/es/index.esm.min.js',
      plugins:[terser()]
    },
    {
      format: 'umd',
      name: 'bundle.umd',
      file: 'dist/umd/index.umd.js',
      inlineDynamicImports: true,
    },
    {
      format: 'umd',
      name: 'bundle.umd',
      file: `dist/umd/index.umd.min.js`,
      inlineDynamicImports: true,
      plugins:[terser()]
    },
  ],
  plugins: [
    autoExternal(),
    typescript({
      useTsconfigDeclarationDir: true, // 使用tsconfig的ts输出路径
    }),
    commonjs({ extensions: ['.js', '.ts'] }),
    resolve(),
    sourceMaps(),
  ],
}
