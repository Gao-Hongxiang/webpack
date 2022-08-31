
- commonjs就是把导出的对象持到exports的属性上
- commonjs2 module.exports


15:48
丁浩宇
我怎么感觉写库就是从入口文件开始导出，如果写业务的话，入口文件只引入，不到出 
可以这么认为
15:51
sunShine
像现在写的这个配置一般只有在写库的时候才会配置吧 是的
sunShine
正常写业务的话应该不会这样配吧 是的

这个要是在html 和css中引入图片也会处理吗 



16:18
jialingling
生产环境可以gzip压缩，就不用用到插件压缩是吧 
需要
nginx 开启gzip压缩

插件压缩前100K
压缩后50K
GZIP压缩后25K


16:25
sunShine
【loadsh】 不是很懂 



爱吃橘子
vender是啥 
Tony
gzip 有webpack压缩， 有nginx压缩，webpack压缩后，nginx就不需要压缩了，可以减少服务器内存 

100K
webpack 50K
gzip 25K

vender 单独成一个包吗 

vendor会成为一个单独的代码块，也会输出成一个单独的文件


16:38
ZhangLe
那有了hash我们部署到服务器上的文件，会自动同步到cdn上吗？ 
这个功能需要自己实现
我们可以做一个插件，把打包后的js和css文件自动上传到CDN上

shine
content hash不是更合理么 为什么还有这么多种方式呢？

存在就是合理的
不同的方式有优点的有缺点的
hash 优点就是快
contenthash 需要计算结果的内容，计算起来非常的慢


这是前端的缓存策略之一吧 
html不缓存，引入的外链是CDN的地址，CDN地址要带上hash并长期缓存


17:02
jialingling
老师，刚刚总结hash的时候，最后讲的那个例子，调整一下内容的位置，contenthash不变这种情况，实际项目里是不是基本不会出现哈？ 9999.99%不会出现
qq
不修改任何文件,多次打包的hash是一样的么 



123撤回了一条消息
123
数字后面也是hash 
帅超超
和 HashedModuleIdsPlugin 有啥关系和区别 



123撤回了一条消息
123
数字后面也是hash 
帅超超
DeterministicModuleIdsPlugin.js
和 HashedModuleIdsPlugin 有啥关系和区别 
123
没写代码 都500多个字节 
shine
我能把one和three打一起吗 
一般来说 one two都是一个天然的代码分割点 splitChunksPlugin
123
现在已经是在讲联邦模块了吗 
shine
你醒醒 
20:12
123
这咋搜进 node——modules 里面的 
