const { SyncHook } = require('./tapable')
const syncHook = new SyncHook(["name", "age"]);
//注册第1个拦截器
syncHook.intercept({
  register(tapInfo) {
    console.log('拦截器1开始register',tapInfo.name);
  },
  call(name,age) {
    console.log(`拦截器1开始call`,name,age);
  },
  tap() {
    console.log(`拦截器1开始tap`);
  }
});
syncHook.intercept({
  register(tapInfo) {
    console.log('拦截器2开始register',tapInfo.name);
  },
  call(name,age) {
    console.log(`拦截器2开始call`,name,age);
  },
  tap() {
    console.log(`拦截器2开始tap`);
  }
});
syncHook.tap('回调1', (name,age) => {
  console.log('回调1',name,age);
});
syncHook.tap('回调2', (name,age) => {
  console.log('回调2',name,age);
});
debugger
syncHook.call('zhufeng',14);