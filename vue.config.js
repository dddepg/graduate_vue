module.exports = {
  publicPath: "/graduate_design",
  assetsDir: "static",
  productionSourceMap: false,
  runtimeCompiler: true,
  pluginOptions: {
    compression: {
      gzip: {
        filename: "[path].gz[query]",
        algorithm: "gzip",
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      },
    },
    configureWebpack: {
      // 关闭 webpack 的性能提示
      performance: {
        hints: false,
      },
    },
  },
};
