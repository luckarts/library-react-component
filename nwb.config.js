module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'luckyReactComponents',
      externals: {
        react: 'React'
      }
    }
  }
}
