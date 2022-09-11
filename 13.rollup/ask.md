sunShine
这个缓存是缓存什么？ 

处理完一个模块后会把处理结果 缓存起来


shine
相同模块不重复解析吧 
肯定的


14:06
丁浩宇
这个options指的的是rollup.config.js文件中导出的配置还是，
在plugins中传递给这个插件的配置对象 

这个options是rollup.config.js中导出的对象


sunShine
option这个钩子以修改配置项吧 
可以的


如果在某个插件中修改了rollup的配置对象，会不会影响其他插件 


针对每一个入口模块，自动引入polyfill
实现就是针对每个入模块，自动插件`import 'polyfill'`
然后还要把polyfill输出到结果中


丁浩宇撤回了一条消息
Tony
为什么还要调this.load() 
15:01
丁浩宇
为什么要在code里面写export那句 
爱吃橘子
load那块懵 



15:01
丁浩宇
为什么要在code里面写export那句 
爱吃橘子
load那块懵 
15:05
丁浩宇
this.load的load是不是下面的load方法 
15:10
Tony
这种写法是创建一个新的虚拟模块，不能直接在用户写的模块中添加代码吗 

刘磊
代理模块是怎么建立的 
15:14
丁浩宇
resolveId执行完成后，rollup会执行load钩子，
而this.load内部也调用了load钩子，那是不是load钩子重复执行了 

是打包过程 我们的load钩子是不是会执行多次?
每个模块都 需要加载,所以每个模块都需要触发load钩子


resolveId  src/index.js
load   

```js
import polyfill
import index.js
```

polyfill
resolveId
load

index.js
resolveId
load



如果我不想建立代理模块来添加plyfill模块，而是通过ast来添加，添加完以后，还会返回执行吗 ??

丁浩宇
include和exclude是不是互斥的，配置了其中一个另一个就不需要配置了 

webpack 
module rules 
{
 include://,
 exclude://
}
//这两个条件可以只指定
只包含
只排除

两个都同时指定
优先级


```js
console.log('import.meta.url', import.meta.url);
dynamicImportPolyfill('./msg-80f39f29.js', import.meta.url).then(res =>
  console.log(res.default));
//import.meta.url=>http://127.0.0.1:8080/index.js
function dynamicImportPolyfill(filename, url) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.onload = () => resolve(window.mod)
    //absURL http://127.0.0.1:8080/msg-80f39f29.js
    const absURL = new URL(filename, url).href;
    console.log('absURL', absURL);
    const blob = new Blob([
      `import * as mod from "${absURL}";`,
      `window.mod = mod;`
    ], { type: 'text/javascript' });
    script.src = URL.createObjectURL(blob);
    document.head.appendChild(script);
  });
}
```






