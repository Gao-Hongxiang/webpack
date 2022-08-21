## 包管理
- npm 最干净 最快
- cnpm 快，但是会打断目录结构 
- yarn 
- pnpm 目前最先进最快的


jialingling
readfile方法可以不bind(fs)吗 可以
爱吃橘子
result.resourceBuffer.toString() 
爱吃橘子
是将buffer转化为js内容吗 

resourceBuffer 存的是二进制的字节
可以通过toString转成字符串

```js
pre-loader2
pre-loader1
normal-loader2
normal-loader1
inline-loader2
inline-loader1
post-loader2
post-loader1
null
console.log('index');//pre-loader2//pre-loader1//normal-loader2//normal-loader1//inline-loader2//inline-loader1//post-loader2//post-loader1
console.log('index');
```

15:08
123
有个前后loader 顺序就可以了 为啥还有个中间的 有个中间就算了还要有个inline 为啥呢

其实从设计之初

三种就够
一种普通 
一种优针级比普通高的
一种是比普通低的

inline有非常特殊而重要的作用 style-loader的时候

爱吃橘子
为啥inlineLoader不放在rules里 

行内和行外
行内是写在require里的
写在rules行外

123撤回了一条消息
奋斗ing
inlineLoader是针对某一个模块吗 
123
后置内联 正常 前置 


15:15
爱吃橘子
1 
袖珍汤锅
之前 amd 规范就有 css!./a.css 这种写法 
袖珍汤锅
在 js 中引入 css 文件 



如果其中任何一个 pitching loader 返回了值就相当于在它以及它右边的 loader 已经执行完毕

```js
pre-loader2
pre-loader1
normal-loader2
normal-loader1
inline-loader2
inline-loader1
post-loader2
post-loader1
null
console.log('index');//pre-loader2//pre-loader1//normal-loader2//normal-loader1//inline-loader2//inline-loader1//post-loader2//post-loader1
console.log('index');
```

```js
inline-loader1
post-loader2
post-loader1
null
result_b//inline-loader1//post-loader2//post-loader1
null
```

```js
post-loader1-pitch
post-loader2-pitch
inline-loader1-pitch
inline-loader2-pitch
normal-loader1-pitch
normal-loader2-pitch
pre-loader1-pitch
pre-loader2-pitch
pre-loader2
pre-loader1
normal-loader2
normal-loader1
inline-loader2
inline-loader1
post-loader2
post-loader1
null
console.log('index');//pre-loader2//pre-loader1//normal-loader2//normal-loader1//inline-loader2//inline-loader1//post-loader2//post-loader1
console.log('index');
```

pitch既然会阻断后面文件的读取，那还要的有什么作用 

马上会讲案例
123撤回了一条消息



123撤回了一条消息
北极那企鹅丶
不return 只处理逻辑应该可以用pitch吧 
如果你加载的模块是一个虚拟模块，硬盘上根本没有这个文件
pitch
123
这些loader 在执行之前先排好顺序 
所以不管如何写只要定义好了loader的类型一定是按照这个顺序打印的 
是的

丁浩宇
loader的查找顺序，不是Babel的查找顺序 
loader的查找过程和找一个普通 的node.js模块查找方式是一样
./xx
yyy
moules  是先查找这个目录下的同名文件，找不到，再找node_modules 下的第三方 
是
123
这个loader 执行也是需要require  所以文件名和 插件名是一样的 
是的