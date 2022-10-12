const typescript = require('@rollup/plugin-typescript')
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
      format: 'cjs',
      dir: path.dirname(`lib/index.cjs.js`),
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      format: 'cjs',
      file: 'lib/index.cjs.min.js',
      plugins:[terser()]
    },
    {
      format: 'es',
      dir: path.dirname('es/index.esm.js'),
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      format: 'es',
      file: 'es/index.esm.min.js',
      plugins:[terser()]
    },
    {
      format: 'umd',
      name: 'bundle.umd',
      file: 'umd/index.umd.js',
      inlineDynamicImports: true,
    },
    {
      format: 'umd',
      name: 'bundle.umd',
      file: `umd/index.umd.min.js`,
      inlineDynamicImports: true,
      plugins:[terser()]
    },
  ],
  plugins: [
    autoExternal(),
    commonjs({ extensions: ['.js', '.ts'] }),
    resolve(),
    typescript(),
    sourceMaps(),
  ],
}
