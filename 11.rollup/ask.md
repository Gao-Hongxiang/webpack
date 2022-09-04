##  vite3
- 开发的时候打包用的esbuild
- 上线的时候打包用的是rollup
- vite内部也是通过插件实现的，插件机制复用的rollup的插件机制




好大鸭
写个插件还要写两套？ 
rollup插件和vite插件可以复用
当然vite插件是一个简化版的rollup插件

丁浩宇
webpack使用的是commonjs规范，rullup使用的是ESM规范吗 
webpack和rollup都会支持esm 和commonjs
但是打包出来的结果 webpack只能是commonjs .rollup可以打包出commonjs也可以打包出esm
好大鸭
--config什么作用 

告诉 rollup打包的时候读取一下当前目录下面的rollup.config.js文件

webpack --config webpack.config.js

forrest
webpack项目能直接升级为vite方式吗？ 
不行
好大鸭
我的意思是 rollup 和 esbuild 插件可以复用吗 
不能
rollup和vite插件可复用，但是和esbuild不行
能
摇树功能不是要求webpack得是es吗规范吗
 treeshaking必须 要求是esm


webpack的treeShaking不讲了吗 
丁浩宇
esBuild是什么东西 

后面会讲，也是一个打包工具





hmr会讲吗 
https://www.javascriptpeixun.cn/goods/show/568?targetId=3581&preview=0
第1章 https://gitee.com/zhufengpeixun/zhufeng_webpack_hmr_2020-ok

丁浩宇
老师，现在jquery有没有必要学习一下了 没有
forrest
老师有必要把webpack项目升级到vite方式？ 

jialingling
单页面的项目使用拆包的应用主要是缓存是吧？ 是的
拆包的目的
1.并行加载
2.缓存
3.懒加载

刚才说webpack只能是commonjs规范，但是摇树功能得要求是esm规范把。
webpack中的treeshaking非常弱，比rollup要差很多


袖珍汤锅
.babelrc 和 babel.config.js 有什么区别？ 
配置文件的格式不同，本质上没有区别
https://www.babeljs.cn/docs/config-files


丁浩宇
webpack中规定插件是类，rullup中的插件是普通函数吗，还是也有什么规定
后面讲
http://www.zhufengpeixun.com/strong/html/103.16.rollup.2.html

http://www.zhufengpeixun.com/strong/html/103.16.rollup.3.html#t42.%20rollup%E6%8F%92%E4%BB%B6


16:37
黑子
5种输出模式有什么不一样么 
amd/es/iife/umd/cjs

amd 已经废弃 require.js
es module 
var xxx = 'main'
umid ()
cjs commonjs


好大鸭
那就不需要import_ from 'lodash'，直接使_ 



丁浩宇
terser是用来干什么的 
yjg
压缩 js
黑子
使用less,scss 
丁浩宇
rollup中是不是没有loader的概念，所有东西都是通过插件来实现 是的
爱吃橘子
老师，main.js之前的代码可以不删吗 
可以



丁浩宇
rollup的思想怎么和koa有点类似，内部自己不实现什么东西，全靠外部插件来实现 

