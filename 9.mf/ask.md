// npm  install html-webpack-plugin react react-dom webpack webpack-cli  html-webpack-plugin babel-loader @babel/preset-react 


20:21
shine
容器就是一个项目？ 可以这么认为
丁浩宇
这个remote和host是固定的名字吗 不是的 随便写
奈斯啊小刘超奈斯
课件 
shine
不固定 
yjg
脚手架没有办法直接使用模块联邦 
ZhangLe
可以跨技术栈吗？ 
可以的
但是都必须使用webpack5
Wáng

publicpath为啥是域名，不应该是一个目录 
publicpath公共资源访问路径 不应该是一个目录

难忘记nice
@babel/core 
黑子
老师,哪个loader可以引入一个scss变量文件,然后在全局使用呀 


微前端就是模块联邦么 
不是
微前端有很多种实现方式
iframe
qiankun
模块联邦

钟畅
只有用webpack才能使用模块联邦嘛 是的
shine
:global() 
shine
:root() 
Tony
好像有个插件 
123
vue的脚手架配置里面就有吧 
shine
插件应该是js全局 变量 替换 


好大鸭
必须要相对路径吗 expose 
是的
爱吃橘子
filename和name有不一样的用途吗 
好大鸭
./newList 

模块联邦是不是所有项目得在一个git仓库下才可以呀？ 
肯定不是

Wáng
到底谁是容器，谁要引用谁 

容器=人
远程容器=服务员  奉献者  向外提供服务
主机容器=顾客    索取者  访问或者说使用别人的服务


你的电脑是一个本地主机 都是电脑
百度的服务器是一个远程主机 都是电脑




123
如果一个团队7个人。那我要引入别人的6个remote 
shine撤回了一条消息
20:54
123
我要是本地服务挂了 别人也用不了 是的
黑子
host中 remote: remote@http   这个remote@是固定的么? 
这个格式是固定的
全局变量名@http请求的JS资源路径

123撤回了一条消息
钟畅
必须要用react.lazy和suspense包裹嘛 
是固定的么
React规定异步加载的组件都要用 SUspend包裹
黑子
是的 
丁浩宇
为什么要用suspense进行包裹 
黑子
react要求,要不会报错 

为什么?
lazy懒加载，刚开始是没有的，后来才加载 回来
没有加载回来之前显示什么？？

suspense 悬停悬挂，可以做到在数据回来之前先显示fallback的内容
等数据回来之后才显示真正的组件



怎么实现组件之间的状态通信呢 
崔
跟正常使用一样吗 
shine
发cdn后别人就能用了吧 
钟畅
会出现跨域问题嘛 nginx  代理
一般来说访问jS是没有跨域问题的
ajax fetch

shine撤回了一条消息
钟畅
那么vue怎么使用呢 
Wáng
现在只能引用一个组件，能引用别人整个项目吗？带远程项目的路由 
丁浩宇
react比vue屁事多 
黑子
自动挡手动挡当然不一样了 
123
需要的时候加载 更合适吧 
123
因为我到了某个页面了 正好需要这个组件，然后我向服务器发请求要 



因为我到了某个页面了 正好需要这个组件，然后我向服务器发请求要 
丁浩宇
模块联邦解决的问题是什么 
丁浩宇
来一首try，这首歌还是非常不错的 
jialingling
那这个远程资源的路径可以设置动态切换开发或者生产环境吗 
sun
host里多个文件都引用了remote的某个组件，每个文件都要lazy引入，然后包一层suspense? 
是的，但是相当的组件其实只会加载一次
钟畅
多个应用的组件在配置文件中维护暴露和使用 后期维护会不会有点混乱呢 
钟畅
老师最后讲讲微前端呗 需要我们学那块呢 乾坤要学嘛 
微前端 qiankun microapp mf emp
专题源码课，也有专门实战训练营，也有视频






123撤回了一条消息
Bury
微前端共享组件的解决方案之一不就是npm吗 
黑子
两个项目相互引用没有问题吧,都是remote又都是host,相互引用 
马上会演示 可以的
123
其实就是微服务的概念 是的
123
刚才 报错是因为2个项目的package。json中的react的version 不一样是吗？ 
不是
丁浩宇
host没有重启 
123
现在是不是想共享别人的react 和react-dom 
是的
123


shine撤回了一条消息
shine撤回了一条消息
shine
那shared的react模块 对于host来说是不是要异步加载？还是预加载？ 
123撤回了一条消息
123
remote 和host 是哪个项目没有安装node_modules ？ 
因为我们的remote和host都需要独立构建，所以都各自需要安装息的node_modules
难忘记nice
打包的时候也是访问的远程文件吗 
打包的时候不是，在服务启动后，运行的时候才访问远程文件
123撤回了一条消息
123撤回了一条消息
123
默认的get请求不跨域 
shine撤回了一条消息
123
是 
难忘记nice
script标签不存在跨域问题 
shine撤回了一条消息
123
是 
难忘记nice
script标签不存在跨域问题 
xxxx
host 那不是要引入react 两次吗 
不管在任何情况下，一个包只引一次 只加载一次
123
只有一个script 是main 呢？ 
Wáng
居然远端共享了react，主机是不是就可以卸载react了》 
那我本地开发 使用react 是无感的对吧 他会判断是否使用shared? 
shine
例如我本地 ： import {useState} from 'react' 




我的意思是查看源码只有一个script 是加载main。js呢 
源码里只有加载main.js
其它的文件都是懒加载的 ，通过jsonp动态加载的
xxxx
host 与  remote 版本不一致怎么办 
各用各的就可以了

黑子
这样可以使用useContext么? 
黑子
向外暴露多个组件可以么 
难忘记nice
其实就是remote单独打包出去了一个js，host启动的时候如果涉及到remote下配置的包就使用外部的包。是这个意思吗？ 
shine
老师 如果 A使用shared的react 18  B 和 C 都shared了react 18 那他用哪个呢？ 
3000/remoteEntry 加载3000 react
8000 使用的是3000/react
Tony
谁先加载就用谁的啊 
shine撤回了一条消息
难忘记nice
优先用别人的吧 优先用共享 的，谁先放到共享库(shared scope)
崔撤回了一条消息
崔
js自上而下吧 
崔
好像也不太对，因为他用了子的 



嗷 我知道了 一个host可以使用多个remote吧？ 
丁浩宇
这个shared只能共享库吗？如果共享组件，需要使用expose 
yjg
是的 
难忘记nice
其实就是remote单独打包出去了一个js，host启动的时候如果涉及到remote下配置的包就使用外部的包。是这个意思吗？ 
是 

怎么判断谁先放置到shared scoped中 
只能看哪个脚本先加载执行，它对应库就会放到共享 里
@
现在有哪些项目用到了微前段？ 



丁浩宇
如果是那个脚本先加载，那么在开发环境，不就是看谁先启动的吗 
shine
shared是跟 remote源绑定的吧？我这个remote中配置的shared就优先使用remote提供的 
shine
毕竟他们同级 
桑珠
生产环境下，如果远程shared的版本号改变了，host就找不到了吧 
瑞思拜
如果远程引用的组件里面用了第三方模块 例如lodash，当前项目没有，也会引用进来吗 
肯定会的






有一个网站，主域名下是一个项目，然后在子域名下部署另一个项目，这样算不算微前端 
jialingling
这个共享库主要应用是用来统一库版本还是说能加快请求速度？ 
加快请求速度

shine
老师 如果我host项目A 使用了react, remote项目B 也提供了shared react，那我A项目运行的时候使用的react是A项目打包产出的 还是B项目shared的 
Wáng
或者说，如果a项目打包的时候，是打包a项目的react还是b共享的react 
打包的时候，是打包不到远程的B的，打包的肯定是本地的
123
remote 是没有打包进来了 
123
有呢 
崔
有 
丁浩宇
星期五晚上讲讲 
崔
值钱 
shine
简单知道原理感觉就可以了 
丁浩宇
今天晚上没兴趣 
难忘记nice
有现成的视频吗 



打包的是本地的，运行的时候看谁先加载，如果先加载了本地就用本地，

加载了远程就用远程。是这样吧 
是的
