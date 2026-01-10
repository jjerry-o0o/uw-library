module.exports = {
  extends: [require.resolve("../../.eslintrc.cjs")],
    parserOptions: {
      project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    }
}