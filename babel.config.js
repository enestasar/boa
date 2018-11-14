module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        loose: true,
      },
    ],
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        alias: {
          '@boa': './src',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};