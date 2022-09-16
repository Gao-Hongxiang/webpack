##  项目启动的第一步

- 1. 查找当前项目依赖的第三方模块
- 2. 把它们的es module版本进行打包，存放在`node_modules\.vite\deps`
node_modules\.vite\deps\vue.js
node_modules\.vite\deps\_metadata.json
node_modules\.vite\deps就是依赖缓存存放目录
{
  "optimized": {
    "vue": {
      "src": "../../vue/dist/vue.runtime.esm-bundler.js",
      "file": "vue.js"
    }
  },
}