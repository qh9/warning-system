
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // proxyTable: {
  //   "/api": {
  //     target: "http://169.254.213.59:7001",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ""
  //     }
  //   }
  // },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'warning-system',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },

      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true
      }
    }],
  ],
  
}
