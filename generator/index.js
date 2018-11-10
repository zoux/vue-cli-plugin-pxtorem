module.exports = api => {
  const utils = require('./utils')(api)

  api.extendPackage({
    devDependencies: {
      "postcss-plugin-px2rem": "^0.7.0"
    }
  })

  api.injectImports(utils.getMain(), `import './plugins/flexible.js'`)
  api.render({
    './src/plugins/flexible.js': './template/src/plugins/flexible.js'
  })

  api.onCreateComplete(() => {
    utils.updatePostcssConfig(cfg => {
      cfg.plugins = cfg.plugins || {}
      cfg.plugins['postcss-plugin-px2rem'] = {}
      return cfg
    })
  })
}
