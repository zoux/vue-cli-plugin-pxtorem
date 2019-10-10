module.exports = api => {
  const utils = require('./utils')(api)

  api.injectImports(utils.getMain(), 'import \'lib-flexible\'')

  api.onCreateComplete(() => {
    utils.updatePostcssConfig(cfg => {
      cfg.plugins = cfg.plugins || {}
      cfg.plugins['postcss-plugin-px2rem'] = {
        rootValue: 37.5
      }
      return cfg
    })
  })
}
