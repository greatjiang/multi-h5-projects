const { defineConfig } = require('@vue/cli-service')
const minimist = require('minimist')

const activityPageName=minimist(process.argv.slice(2))['name']

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : `/${activityPageName}`,
  pages:{
    [activityPageName]:{
      entry:`src/pages/${activityPageName}/js/index.js`,
      template:`src/pages/${activityPageName}/index.html`,
      filename:'index.html',
    }
  },
  productionSourceMap: false,
  outputDir: `activity-dist/${activityPageName}`,
  chainWebpack:config => {
    config.resolve.alias.set('@img',`@/pages/${activityPageName}/img`)
    config.resolve.alias.set('@common',`@/common`)
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: `/${activityPageName}`, to: `/${activityPageName}/index.html`},
      ],
    },
  },
})
