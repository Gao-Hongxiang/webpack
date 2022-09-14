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
一部分是NODe服务器端
一部分是client客户端代码

1.扫描整个项目,找到依赖的第三方模块
2.编译这些第三方模块,放到.vite目录中
3.重写返回的导入路径,指向编译 后的文件 main.js
import { createApp } from 'vue';
import { createApp } from '/node_modules/.vite/deps/vue.js';
4.请求服务器的时候,服务器可以返回/node_modules/.vite/deps/vue.js

