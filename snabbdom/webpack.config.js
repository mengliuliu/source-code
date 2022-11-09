const path = require("path")

module.exports = {
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    // 虚拟打包路径，文件夹不会真正生成，而是在8080端口虚拟生成
    path: path.resolve(process.cwd(), "./dist"),
    // 打包出来的文件名
    filename: "bundle.js",
  },
  mode: "none",
  devtool: 'eval-source-map',
  // 配置webpack-dev-server
  devServer: {
    // 静态根目录
    static: {
      directory: "./public", // 服务的根目录，用于静态文件
    },
    // 端口号
    port: 8080,
  },
}
