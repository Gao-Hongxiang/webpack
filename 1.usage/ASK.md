09:36
好大鸭
webpack 和webpack-cli 什么区别呢 
webpack是打包的核心包
cli是命令行工具我
赵文明
多入口和多出口怎么配了 
09:45
咚哩个咚
所以loader最少得两个是么 
能
不是不是 
sunShine
这种webpack应该可以配置没有压缩的来进行调试吧 
后知后觉后想念
老师，最左侧的loader一定会返回一个js模块是什么意思？ 
钟畅
webpack4 5有啥变化 
11
如果我要指定开发环境 还需要压缩该咋办 
happy撤回了一条消息
好大鸭
json不认识吗？ 
好大鸭
图片怎么处理呢 
赵文明
xml 和 yum 也能识别吧 
yaml
null
太强了， 能力既是生产了 
null
生产力 
嘻嘻
太强了 
11
老师如果我要指定开发环境 还需要压缩该咋办 
lesson
装个压缩插件呗 
TerserPlugin
11
webpack 好像只有 mode = production 才会压缩 
如果mode=production
自己内部会自动启动压缩插件 js css html
能
一个是node的变量，一个是webpack的环境变量 

一个是node变量


10:03
刘磊
Defineplugin 是设置到window上了吗？ 
不是的。Defineplugin只是设置一些key value.用于模块打包的时候对源码进行替换
它并不是定了一个变量，跟window和global全局变量都没关系 

刘磊
能修改Defineplugin设置的变量不 



通过环境变量文件设置效果和cross-env效果一样么 
Anne
世纪项目中是否应该有一个配置环境变量是： 生产环境、开发环境、测试环境的地方？或者文件 
en

Anne撤回了一条消息
何以时光陌
env文件 
Anne
实际项目 
好大鸭
只要webpack一个包也可以打包吧 
好大鸭
不需要命令行工具 
后知后觉后想念
老师 style loader 不是把打包中的样式js 转换后插入html中吗？ 
是的，我们后会手写 style-loader
谷新磊
webpack配置替换key：value有啥作用？ 
jialingling
是不是在vue项目里面也能直接取到age哈 只要在源码中都可以取到


3557
.env 
陈柳鹏
编译替换吧，不是挂载吧？ 只是编译时的字符串替换，并不是挂载到任何对象上去 replace
177****1991
.env.production? 
Cara
env怎么添加自定义参数 




老师会讲webpakc配置gzip压缩吗？之前在用webpack-theme-color-replacer插件的时候发现配置了gzip压缩后，该插件注册在windows上的变量就找不到了 
vc
配置cross-env 还用设置DefinePlugin 他们的关系是怎样的? 
其实可以没关系
但是我们可以通过
'process.env.NODE_ENV': process.env.NODE_ENV,
能
vue-cli中的env文件也是这样定义的把 
vue-cli create-react-app都是这么做的

何以时光陌
对 




开发和生产环境不一样的name和key怎么取 
何以时光陌
定义不同的env文件 
|- config.default.js
|- config.prod.js
|- config.unittest.js
`- config.local.js

好大鸭
cross-env 是node变量，所有文件都可以获取 是的
难忘记nice
vue-cli的配置就是dot-env+definePlugin吗 
北极那企鹅丶
一个是node执行时临时环境变量，
一个是代码在浏览器运行时被替换的字符串 
这个替换是在打包编译的时候替换的，在浏览运行的时候不会替换了
11
两个不一样，那 js 代码里会替换成哪个 
DefinePlugin
北


肯定是definePlugin了 
爱吃橘子
老师，不在脚本里配cross.env,可以在config.js里配置环境变量吗 
赵文明
通过 definedPlugin 加webpack-merge 也能实现 
177****1991
vue-cli-service build --mode production 能获取到.env.production中自定义的 环境变量 原理是啥样的啊（process.env可以拿到对应的配置） 


后知后觉后想念
老师  webpack的底层是nodejs  所以webpack运行时使用v8引擎运行的吗？ 运行的是node的环境？ 
是的
水星
明白了 
123
休息下吧 

webpack-dev-server
1.用webpack打包项目，得到输出的文件，放到输出目录里，
webpack-dev-server打包的话，结果文件并不会写入硬盘，只会写到内存里。
2.启动http服务器，用来返回打包后的文件
http服务器的静态文件根目录有两个
1.打包后的dist目录
2.我们指定的静态文件根目录 public目录 




wind-zhou
相当于启动的express 服务器托管了静态文件？ 
原理就是启动了express服务器，托管了二个静态文件根目录
10:59
奈斯啊小刘超奈斯
sass
node-sass
dart-sass
node-sass  是 scss 用的,好多人都不让我用 node-sass,怎么能代替他呢 
dart-sass
奈斯啊小刘超奈斯
不用这个,可以用什么呀 
陈柳鹏
sass 
陈柳鹏
之前叫dart-sass 
好大鸭
为啥不让 
陈柳鹏
安装困难。 
177****1991
是不是每次下载不下来 
奈斯啊小刘超奈斯
有这个问题 
177****1991
设置个nmprc 
Bury
node-sass确实有一些兼容问题 需要跟node版本匹配 
奈斯啊小刘超奈斯
关键是node-sass,让替换掉,换别的包忘记了叫什么了 
177****1991
设置到私有库 或者淘宝镜像 很快的 
陈柳鹏
就叫sass 
陈柳鹏
"sass":"版本" 
李杰
scss感觉要强大 
李杰
可以循环 函数都可以用 
好大鸭
scss 和 sass 分不清楚 
123
可以前面不要配置css-loader 和style-loader 因为第一个配置了 
奈斯啊小刘超奈斯
不可以吧 



奈斯啊小刘超奈斯撤回了一条消息
丁浩宇
postcss-loader和其他loader有没有顺序 
当然有了
它是处理css,直接处理原始的css
奈斯啊小刘超奈斯
有的 
奈斯啊小刘超奈斯
必须这个顺序 
好大鸭
postcss能不能写在cssloader后面 
丁浩宇
postcss.config.js和.postcssrc推荐使用那个 
123
这个browserslist 只有webpack 支持吧，vite 不支持吧 



webpack4.0 webpack5.0
对静态文件的处理不一样
4 处理图片 
file-loader 读取源图片，拷贝并重命名输出到目标目录下，然后返回新的名称
url-loader 可以把静态文件变成base64字符串，进行返回，可以直接内嵌到HTML里

v5之后
这二个loader的都废弃了
