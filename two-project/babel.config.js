module.exports = {
  presets: ['@babel/env'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: '../',
        alias: {
          'utils': './utils/src',
          'one-project': './one-project/src',
          'two-project': './two-project/lib',
        },
      },
    ],
  ],
};
