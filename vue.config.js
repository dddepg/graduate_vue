module.exports = {
  publicPath: "/graduate_design",
  assetsDir: "static",
  productionSourceMap: false,
  pluginOptions: {
    compression: {
      brotli: {
        filename: "[path].br[query]",
        algorithm: "brotliCompress",
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        compressionOptions: {
          level: 11,
        },
        minRatio: 0.8,
      },
      gzip: {
        filename: "[path].gz[query]",
        algorithm: "gzip",
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      },
      configureWebpack: {
        // 关闭 webpack 的性能提示
         performance: {
           hints:false
         }
      },    
    },
  },
};
