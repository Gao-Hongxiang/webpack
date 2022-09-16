21:58
好大鸭
bin只能用cjs引用文件了 


22:10
丁浩宇
怎么判断当前进程的当前目录 
好大鸭
config也不用async啊 
async 可以同步也可以异步
sync 只能同步





3.0为啥改成5173了 这个不是一个交易平台么 
8080
shine
有了 
好大鸭
为啥有vue.map  
yjg
映射文件 
用esbuild编译 vue入口的时候,编译出一个vue.js,另外还会生成一个从源码到目标文件的映射文件

vite分为两部分
一部分是Node服务器端
一部分是client客户端代码

1.扫描整个项目,找到依赖的第三方模块
2.编译这些第三方模块,放到.vite目录中
3.重写返回的导入路径,指向编译 后的文件 main.js
import { createApp } from 'vue';
import { createApp } from '/node_modules/.vite/deps/vue.js';
4.请求服务器的时候,服务器可以返回/node_modules/.vite/deps/vue.js



这个流程是resolve完了就到onload了是么？ 
是的
esbuild功能非常简单
好大鸭




为啥不能对HTML语法树 
webpack rollup 都是用来打包js
AST
js 语法树
css  
html 
叶伟茂
src 
丁浩宇
vite中有没有类似webpack的html-webpack-plugin插件 
shine
vite-plugin-html 
能
为什么不是namespace：js了 
除非你要对此模块特殊 处理才会修改namespace
如果走默认逻辑的话就不需要修改namespace
爱吃橘子
老师再讲下正则，没听到刚进来 
shine
又重新进来了 
shine
没有 都没有 
shine
为啥写上面去了 



打包的时候 
找到入口模块，然后再找到入口模块依赖的模块，
每个模块的处理都要有3步走
1.找到模块绝对路径
2.读取模块内容
3.解析模块内容
onResolve onLoad


第一次进来的时候 两个onResolve都会执行吗 


这个外部模块仅仅表示node_modules中的模块，不包括cdn引入的吧 

第一次先处理index.html
先执行 build.onResolve({ filter: htmlTypesRE }
发现过滤器能匹配上，return {path}
如果有任何一个回调有返回了，则会跳过剩下的onResolve
webpack bail rollup first

走build.onLoad({ filter: htmlTypesRE
过滤匹配上，执行回调，返回 return {contents}
如果onLoad返回内容，直接会进行解析流程，不再走默认的读取文件操作了



路径里面的别名？ 
丁浩宇
这个怎么写了 
shine
mac和win都一样吧 
好大鸭
相对路径一会打印一下吧 
丁浩宇
resolve这个包用来干什么的 
找包名对应的路径
resolve('vue')C:\aproject\webpack202208\vite50use\node_modules\vue
shine
再拿main字段或者entry 
shine
找入口文件 
爱吃橘子
pathLib是啥 
path就是node里面的path模块

丁浩宇
入口不是找package.json中的main字段吗 
main一般是commonjs 或者是es5
module es module es6
123
那怎么知道安装的npm 包油没有esm 格式的 呢 
 不用管，vite内部其实会转换的
123
如果没有这个esm 格式的包vite 怎么处理？ 
123
相对 绝对 第三方 


resolve只找node_modules中的路径吗 是的
全都支持

好大鸭
@怎么找呢 

先看看这个@对应的别名，然后再别名下面的路径


三思
resolvId方法循环plugins解析id，为啥拿最后一个id 
拿 是第一个






难忘记nice
getScan这个是esbuild 插件
shine
onResolve html 
123
为啥 index。html 里面拿到main.js 入口 

123
应该不走html 才对呢 
index.html才是入口
好大鸭
为啥走第二次resolve 
每一个模块都会走一次resolve
123
不同格式的 
123
index。html 依赖了main。js？ 是的
shine
继续解析 
shine
老师这里如果除了vue还有依赖其他 是不是就一直解析
，解析到什么程度为止呢？所有依赖项？ 
解析完所有的依赖
import 'react'
import 'lodash'

如果不是true；一直解析吧 是的
123
第三方 比方说vue的esm 已经把vue的依赖的代码打包进入esm格式的 所以external：true 不管了
是的 
123
vite 的入口是index。html 
是的





22:14
好大鸭
12行是不是字符串deps 是的
123撤回了一条消息
123
needsInterops 是干啥的 在esmodule commons之间转换的
require=> import
module.exports => export default
shine
有点懵，vue.runtime.es-builder.js这个文件不是编译好的么 
不是的vue.runtime.es-builder.js 是vue的es module源文件
shine
为什么又build一次 
esbuild走了二次
第一次走build,是为了找依赖模块
第二次走build，是为编译依赖模块


22:23
奋斗ing
deps字符串 
22:27
123
为啥我们下载的包里面有个"dist/vue.runtime.esm-bundler.js" 目录 但是npm 包对应的github 仓库的https://github.com/vuejs/core/tree/main/packages/vue 里面就没有dist 呢 
22:31
好大鸭
非得转相对吗 源码是这样做


编译是交给esbuild 编译的 是的



看看node_modules 里面编译完成的  vue 
shine
老师辛苦 晚安 下班 
xxxx
编译就是生成文件吧 是的。生成deps/vue.js文件

在我们这样的项目里
esbuild编译会执行多少次？？？



esbuild 好强大 
esbuild不强大，很弱，但是速度快

K
 引用的也是这个编译好的文件？
 以后再访问的都是编译 好的这个文件了deps/vue.js

三思
编译前后有啥区别 
编译前是多个文件，编译 后是一个文件

为什么要先编译发了叫这样可以减少http请求
index.js  a  b c d 100.js
请客户端index.js,再去请求 a b c d 100个请求
服务器启动前
index  a b c d  1000合并成一个文件
后面请求的时候请求一个文件就可以
xxxx
两次 



速度快是因为他是用go写的 
奋斗ing
找依赖 预编译 
123
为啥我感觉就开始的时候呢 
好大鸭
那我下次打开是不是就不再编译了 是的
K
编译的时候esbuild 会 tree shaking吗 没有
yjg
减少查找文件 
好大鸭
那要是ab都引用了c 
能
把所有第三方编译到一起，会不会命名冲突啊 
想想，我们自己实现的rollup，命名冲突会重命名


但是vue 预编译只是编译了vue.runtime.esm-bundler.js"一个吧？ 

esbuild执行了几次？？

至少是一次
找依赖
然后有多少第三方依赖就再执行多次少
1+n次


那要是ab都引用了c c会打包在两个文件里面吗 
会


vite有依赖预构建的概念，为什么不能在安装包的时候就写入node_modules中 
因为你的项目依赖的模块不固定
按需编译 ，
好大鸭
byebye 
帅汤汤
自己写的模块不会用 esbuild 打包吧？会的
是用的 es-module-lexer 吗？ 
丁浩宇
这样是不是更快 
宁肯多做也不可少做 
丁浩宇
为什么go的速度这么快 
