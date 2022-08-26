const { AsyncParallelHook } = require('./tapable');
const hook = new AsyncParallelHook(['name', 'age']);
console.time('cost');
hook.tap('tap', (name, age) => { 
  console.log('tap', name, age);
})
hook.tapAsync('tapAsync', (name, age,callback) => { 
  console.log('tapAsync', name, age);
  callback();
})
hook.tapPromise('1', (name,age) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1, name, age);
      resolve();
    }, 1000);
  });
});
hook.tapPromise('2', (name,age) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2, name, age);
      resolve();
    }, 2000);
  });
});
hook.tapPromise('3', (name,age) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3, name, age);
      resolve();
    }, 3000);
  });
});
//不需要每次调用tapAsync就动态编译
//只有当你调用callAsync方法的时候才会去动态编译
//而且动态编译后的方法会覆盖hook.callAsync
//以后再执行hook.callAsync也不需要再编译
debugger
/* hook.callAsync('zhufeng', 18, () => {
  console.log('done');
  console.timeEnd('cost');
}); */
hook.promise('zhufeng', 18).then(() => {
  console.log('done');
  console.timeEnd('cost');
});
//tapAsync会让缓存失效，下次调用callAsync的时候会重新编译 
//但是按照常理 是先做饭才吃饭呢 先callAsync编译再运行 
/* hook.tapAsync('4', (name,age,callback) => {
  setTimeout(() => {
    console.log(4, name, age);
    callback();
  }, 4000);
});
hook.callAsync('zhufeng', 18, () => {
  console.log('done');
}); */