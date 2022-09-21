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


上节课我学习了如何进行预编译并把结果保存到.vite/deps/下面


下一个要重写模块中的导入的路径
叶伟茂
本地模块是怎么处理预编译的  ? 
叶伟茂
为什么要挂载在server上面  ? 
现在挂上去，是为以后取值用的

vue=>/node_modules/.vite/deps/vue.js?v=8406a619'



好大鸭
直接引入容器不行吗 
不行
因为项目有很多个插件容器
此处我们要使用server提供的容器
好大鸭
还要放到server上 
123
为啥不直接import  transfformRequest的resolveId 等 方法 
yjg
放到server方便后期控制插件 
实现了server单例的插件容器
能
居然已经打包好了vue，为什么不直接修改main.js的代码，把vue修改了打包以后的地址
是这样的做的
现在就是要修改main.js代码，把vue修改了打包以后的地址
 


1.调用resolveId方法 是遍历每个plugin 来找这个方法执行，有点不理解为啥要这么设计?


调用resolveId方法 是遍历每个plugin 来找这个方法执行，有点不理解为啥要这么设计 
为了灵活 
后面我们还会写别的插件，实现别的resolveId的方法

张仁阳
有问题可以接着问 
15:09
叶伟茂
mac的绝对路径是以 '/'开头的, 获取绝对路径那块的逻辑会有点问题 
15:12
张仁阳
1 
sunShine
mac中<script type="module" src="/src/main.js"></script> 
sunShine
这里以绝对路径有问题 
爱吃橘子



15:25
shine
引入文件的本地预编译映射文件 
好大鸭
前几天不是做过了吗 
丁浩宇
await init 和 await init() 这两种方式有什么区别 
爱吃橘子
不传参一个意思 


有个性能问题，本地一次做多同时能发送多少个文件请求？都 要处理么？假设处理过呢重复的 
会走浏览器缓存
15:44
shine
为什么要这么做呢？创建个new class 
每次调用它的ctx 都不一样
ccc
直接把容器container当ctx上下文传进去不就行了 
shine
少处理了一点东西


16:01
shine
插件容器，再middleWare注册的时候加？ 
可以在创建完server之后，把server实例传递给插件
shine
老师 如果我加载2次vuejs呢？现在看 第二次还是要走解析这一套呀 
解析要解析
但是可以走缓存
shine
不能 
yjg
不能 


为什么只请求了1次 这里是那里判断了？
为什么只请求了1次 这里是那里判断了？ 
yjg
碰到相同文件会从缓存中获取 
shine
应该是rollup在处理源代码的时候就去重了吧？ 
shine
还是esbuild去重了 



17:23
shine
有个问题老师 
这个defineplugin是vite-vue-plugin这个插件来实现的，那defineplugin就是vite-vue-plugin的依赖？ 


definePlugin是vite内置插件
vue插件提供替换的值


app.vue里面的内容为啥要编译成这样  ? 




getScanPlugin 插件中，
vue 被设置为 external 了。
是的
vue里面引入的第三方库就不再处理

那 vue 里面 import 的第三方库就不能预编译了吗？ 预编译了！

帅汤汤
我指的是 .vue 文件 
帅汤汤
.vue 文件里 import 的内容 

我们的本地模块，或者说自己写的模块，本来就不会预编译 
我们只会预编译 第三方模块



是不是http协议改成其他协议，就会出发upgrade 是的
shine撤回了一条消息
shine
这个upgrade是client发的还是浏览器自动？ 
所谓的client就是指的浏览器

Potter
应该在client里面 
Wáng
如果不是vite-hmr就不升级了？ 
shine
ws协议本身就会升级，应该是处理不同？ 




wss=websocket服务器
和ws区别在。。 没有 ws
Potter
协商头升级头标记 
K
浏览器里new websocket 连接 服务器，是http请求？ 不是ws吗？ 
第一次连接 的确是http请求，使用的是http协议
然后http服务器会把协议升级成websocket


ws应该指的的是handle Upgrade中回调函数的参数 

那在network 里面看不到第一次吗 



shine
白色的那个就是第一次 
K
第一次连接 也是唯一的一次
K
哦哦 
shine
升级了不需要重新发请求 

要想处理这个冒泡的过程
知道什么信息?
1.知道哪些模块导入了哪些模块
2.知道父模块可以接收哪些子模块的变更

知道我引的谁？谁引入的我


22:02
Wáng
如果不同意升级，是不是这个链接就报错 
Wáng
如果不挂电话，ws会不会占用http的通道  会占用一个连接  会占用一个通道 
Potter
应该算共用tcp通道，进行消息处理吧 

websocket http tcp

22:09
shine
那 处理者怎么知道这条该不该接收呢》是不是应该标志？  vite-hmr
Potter
叶子节点到根节点，建立依赖树？ 是的
shine
嗷 明白了！消息处理方应该知道那些消息我该处理，而不是发送方指定 
Potter
老师：今晚讲到几点呀？ 
shine
10.30 坚持！ 
K
是不是要搞一个文件的二叉树 
shine
有点像 rollup 、lib下的scope 
Potter
rollup treeshaking 思想 
22:20
shine
analysis的时候？ 

22:29
Wáng
基于tcp 
shine
tcp 协议底层 http 和ws 是实现 
Wáng
建立tcp链接，发送http请求 

http 和websocket是应用层协议
tcp传输协议

1 
Potter
1 
K
老师 你刚画那张图 等你讲完了 再看下哈 
22:38
帅汤汤
resolve 
