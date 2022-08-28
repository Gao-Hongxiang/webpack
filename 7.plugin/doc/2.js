//如何html-webpack-plugin向compilation上挂载额外的钩子
let compilation = {
  hooks: {
    emit:new SyncHook()
  }
}
compilation.hooks.alterAssetTagGroups = new SyncHook()