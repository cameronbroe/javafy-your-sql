const MonacoEditorPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  publicPath: "javafy-your-sql",
  configureWebpack: {
    plugins: [
      new MonacoEditorPlugin({
        languages: ["sql", "java"]
      })
    ]
  }
};
