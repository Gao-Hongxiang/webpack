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
