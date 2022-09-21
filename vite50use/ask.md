


import "/src/App.vue?vue&type=style&index=0&lang.css"


好大鸭
相对绝对都可以生效吧 
比哑巴吃黄连还要苦
3625 
丁浩宇
import css的时候不是也走resolveId，
不能在transform中增加一个判断条件是不是css结尾，如果是进入 






shine
\n var?空格？ 
Potter
document.head.appendChild(style)  
Potter
加完就自动生效 
帅汤汤
字符串的标签模板语法 
sunShine
是不是那个json格式化的问题 
shine
App.vue文件 解析成了js是吗？ 是的



```
{"type":"update","updates":[{"type":"js-update","timestamp":1663766475066,"path":"/src/main.js","explicitImportRequired":false,"acceptedPath":"/src/renderModule.js"}]}
```

当一个模块发生变化的时候，会向上通知，如果有一个模块能够接收自己的改变，那么就到此为止
让此接收的模块执行回调，处理更新
如果一直向上通知，没有任何一个模块能接收，直接 刷新浏览器


丁浩宇
怎么多了一个webSocket服务器 
马上实现
shine
一直有 
shine
我们自己写的没实现应该是 
21:22
Wáng
這跟webpack熱更新很像 非常像
21:27
丁浩宇
env.mjs是什么了 