module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        },
        modules: 'auto'
      }
    ],
    '@babel/preset-typescript',
  ],
  plugins:[
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    'transform-es2015-modules-commonjs'
  ]
};
