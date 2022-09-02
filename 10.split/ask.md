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

