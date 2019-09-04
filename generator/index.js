const pkg = require('../package')

module.exports = api => {
  const utils = require('./utils')(api)

  api.injectImports(utils.getMain(), `import '${pkg.name}/libs/flexible.js'`)

  api.onCreateComplete(() => {
    utils.updatePostcssConfig(cfg => {
      cfg.plugins = cfg.plugins || {}
      cfg.plugins['postcss-plugin-px2rem'] = {
        exclude: /node_modules/
      }
      return cfg
    })
  })
}
