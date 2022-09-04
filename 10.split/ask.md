import,和创建srcpit标签一样吗 

import是一个JS语法
webpack在打包编译的时候，如果遇到import语法
会反它转换成require.e,require.e是通过动态创建script标签实现的

修改这个优先级有什么作用 
崔
这个优先级顺序会不会造成引用的问题 
123
ppreload 
能
link不是css吗 
崔
比如上级有某个方法，在这里使用，但上级优先级没有这个高，会不会出现方法找不到 
123
主要是rel 类型是preload的就是hight 




我记得有个魔法字符串的插件来着 
在以前prelod不能直接用，需要安装插件
prefetch不需要安装插件直接可以使用
jialingling
老师，为什么同步代码不需要处理优先级哈？同步代码的默认优先级都是高，就不能再进行调整了嘛？ 
123
这个方法也不对应该是获取的有魔法字符串的 
爱吃橘子
老师，import那也应该注释掉原来的东西 
123
没用呢 
123
插件没开启 
丁浩宇
preload这个插件依赖HtmlWebpack Plugin，那如果我不使用HtmlWebpackPlugin进行打包，那preload不就废了 
123
prefetch 没开启 



yjg撤回了一条消息
崔
preload和prefetch的区别是啥 
preload用于标识此页面必须要用到的关键资源，优先级高
prefetch用于标识此页面不需要，但未来可能会且到的资源，优先级低一点
能
用link加载的优先级更高？ 
rel='preload'
丁浩宇
不是有5个优先级吗？preload属于high，那怎么设置为highest 
123
这个是中文文档 
爱吃橘子
那就只有个preload有用 


jialingling
这个插件一用的话，就会把所有的异步代码的优先级都提升，是吧？这样会不会影响性能？ 
是的
难忘记nice
link不会真实引入js吧，只是提前加载了，还是要等待script标签触发的吧 
会真实引入并执行

shine
缓存了、 
Francis
区别很简单，本页用的音频资源preload优先级最高，其他页面还没用用到的音频资源会在浏览器空闲的时候加载prefetch资源做缓存资源 
丁浩宇
link上的as是怎么添加上去的 
丁浩宇
设置attributes的时候也没有设置as 

不明白，如果写了preload，
如果你给了preload.后面再加载的话不会再请求文件了
而脚本放在了最后优先级也不是最低？
如果把srcpit放在最头部优先级也是最高啊 

为什么要使用link引入懒加载的文件，而不是直接添加script[表情]引入 
html语法
123
prefetch 没有演示呢 


我的意思就是，就算不写preload。把srcipt放在最前面，优先级也是最高啊 
所以说preload只用于懒加载
普通的同步脚本不需要
丁浩宇
script的会阻塞进程，那preload使用link引入会不会也阻塞 
会的


等于说preload在懒加载的脚本中优先级最高
可以这么说 


preload的脚本  是加载完就执行还是等调用？ 
加载完就执行


prefetch 是 webpack默认支持的，会在当前的代码块加载完成后进行加载
不需要安装任何插件
prefetch优先级还是比较低的，会等当前的主脚本加载完成后才执行，

为何配置了 webpackPreload:true没有效果
如果你想一个script脚本设置为preload,预先拉取，他的优先级是非常高的
它应该和main.js并行加载
所以说我们不可能把插件preload脚本的的动作放在main.js里面执行
只能把这个工作交给html-webpack-plugin,动态的向html文件里插入链接




14:22
wind-zhou
刚才那个插件在哪里识别的魔法注释？ 
 
forrest
如果是单页面是不就不需要拆分了？ 
还是需要的
只不过就是实现懒加载了
不需要抽取公共模块了

如果要读魔法注释，应该怎么识别 


14:36
丁浩宇
importCall不是解析import语句使用的，
那能不能使用require来prefetch和preload，那如果使用require倒入，prefetch和preload不就废了 

肯定 不能

prefetch preload只能用于importCall,也就是import方法调用



14:52
shine
jquery 
14:55
好大鸭
jq 用了1次，也要分割出去 是的
yjg
包大于多少webpack会自动分割吧 
splitChunks.enforceSizeThreshold
50k
15:02
好大鸭
设置为false，jq也被单独拎出来了 
丁浩宇
设置缓存组有什么作用 
缓存组其实就是是分组用的
不同的模块分成到不同的组里。
不同的组会生成不同的代码块
不同的代码块会生成不同的文件



嘻嘻
priority 可以写正数吗 

因为在webpack内部

王泽峰
刚刚是因为JQ即符合test，又满足minChunks ? 是的
Tony
jquery 会和lodash打包在一起吗 
Tony
还是分开打包 


怎么自定义分组 
15:11
好大鸭
分组之后会把当前代码块中的符合条件模块分拆出去，当前代码块体积会变小
但是总共大小会变大
分组会让打包体积变小吗，因为他拆分了公共部分 
15:14
丁浩宇
不使用缓存组可以吗 可以的
:false
田
lodash中有很多方法，例如我只使用了 _.get()  方法，按道理我打包只需要打包这个方法的代码，但是看到打出来的lodash包很大，不符合吧 
这个就是靠tree shaking优化的




defaultVendors和default的主要是什么区别？
一个用来对指定文件夹里面的内容做拆分，
一个用来根据资源的引用和大小等条件做拆分吗 

是的
分组的条件不同

