module.exports = {
  presets: [
    '@vue/babel-preset-jsx'
  ],
  'plugins': [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    ["@babel/plugin-syntax-optional-chaining"]
  ]
}
