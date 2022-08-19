
天空
webpack如何打包不认识的文件呢？ 
比如后缀为 .baxx 的二进制文件？  需要自己写webpack插件嘛？ 

不是写插件，而是写loader
 
lesson
会提示你 找 loader 



会议用户619087
是干什么的插件啊 
爱吃橘子
去除注释的代码 
123
这个main 到底是chunk 还是assets？ 
是chunk ，跟asset没关系
assets是由
 filename:'xxx.js'决定的
 
123
module chunk assets you的能输出，有的是过程的产物或者额组成部分？ 

modules
chunk
asset

点外卖 蛋炒饭
1.买蛋和米饭 modules
2.炒出一盘蛋炒饭 chunk
3.打包成饭盒 asset



21:47
Tony
不是， loader名称也错了 
能
返回字符串不行识别不了吗？ 
123
不能导入导出吧 
隽
可以，但是名字错了 
难忘记nice
内容得变成js才能识别 
会议用户619087
是不是需要配置babel-loader 不用配
能
chunk是打包过程中的概念，assets是输出的资源？可以这么认为 



北极那企鹅丶
引入babel-loader进行ast解析就应该打包失败了 是的
Tony
是不是rm.js 插件删除注释了 是的


只有返回js和json才能被识别？返回string识别不了 
水星
Loader懂了，老师解释下插件吧 



老师,这两个插件调换一下是不是执行顺序也会变呀 




一个是run 一个是done 肯定不会变 
wind-zhou
之前写的是loader插件，靠的是操作AST语法树，现在写的是webpack插件，靠的是调用webpack内置的的钩子？ 
原来写的babel插件，是转换语法树的

Anne
不会 
lesson
类似于生命周期钩子 给写在 上面还是下面 没啥关系吧 
能
那碗 
123
先洗手 
水星
不是都在run里面吗 
wind-zhou
因为钩子的的调用顺序已经内定了，类似于生命周期 
黑子
不会 
天



黑子
compiler.hooks.done 这个是固定的么? 那 hoos的可以都有什么呀 
https://webpack.js.org/api/compiler-hooks/#done

159****6280
跟订阅先后没关系，先走run再走done 
是的
黑子
compiler.hooks.done 这个是固定的么? 那 hoos的key都有什么呀 
https://webpack.js.org/api/compiler-hooks/#done

wind-zhou
1 
lesson
这两个会合并？ 不会
天空
babel和webpack的关系是什么？ 执行顺序是啥？ 
webpack在编译的时候，如果遇到js文件，会调用babel-loader进行文件内容的转换
在babel转换的时候会使用babel插件来转换
水星
Compile 
123
或者说注册 
Tony
babel是通过babel-loader才用的 
123
apply的时候 
shine
好嘞！ 


老师，第一节课里，类型别名那里，
其他的类型是不是都属于program类型？
看到的ast树里面最上层的类型都是program
