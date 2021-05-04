const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'sass',
        patterns: []
      }
    },

    css:{
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/global.scss";`
            }
        }
    }
}
