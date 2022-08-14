15:13
lesson
这个require 和 node require 感觉 怎么一样 是一样的
好大鸭
玩的就是对象引用 是的
说滴对！
commonjs规范应用还是广泛的，es6module好像只有vite在用吧 
从未来来说，以后只有esmodule,以后不再有commonjs

1.common.js加载common.js


15:30
丁浩宇
为什么要定义Symbol.toStringTag和_ESModule属性 
不同来源的模块取值方法是不一样的

15:33
咚哩个咚
r方法和d方法分别干什么的，写下注释呗 
你说的都对
o 
你说的都对
d 
15:38
你说的都对
感觉toStringTag 和_esmodule: true 没有用到呢 
没有到
lesson
d 方法 采用get 是后面要放逻辑吗？ 看着没啥用呀 



咚哩个咚
因为导出age所以这里定义age变量么？那若是导出多个，都要一一定义变量么 
是的
你说的都对
require.d 是否要判断key 是 export 本身上的 
是的，其实是需要的
今天有风
d 是属性代理 是吗 
getter
lgx
怎么区分的es6module 和commonjs的
只要模块内出现了import和export就是es module
require exports. module.exports就是commonjs 
后知后觉后想念
老师，运行modules里的方法，不用运行引进来的代码吗？ 
5255
那我导出的既有 commoen的语法， 也有 esmouule 语法，怎么区分
一般来说我们不会这么做。
commonjs esmodule
esmodule 
import export 
lgx
引入的文件既有es module又有commonjs怎么区分的 


丁浩宇
为什么要通过getter来挂载属性 
有一道面试题
commonjs 导出值和es module导出变量的引用有什么区别?
一个导出值，一个是导出引用

丁浩宇
而不是直接用exports.age这种形式 
咚哩个咚
老师多写点注释吧，后面直接看代码复习了，不用再看一遍录播 
你说的都对
遍历defintion 给moudle.export 赋值 




export可以配合require？ 
可以的
commonjs和esmodule可以混着用
你说的都对
编译下看看 
天空
如果导出的是对象，是不两种方式都是一样的
 是的 
victor
es module导出  可以用commonjs引入吗？ 可以
你说的都对
看看 commonjs的编译 
刘磊
commonjs和 es module 导入导出怎么区分 
后知后觉后想念
老师我用commonJs 



后知后觉后想念
导出一个引用类型的值也不会改吗？ 会的
你说的都对
看看 引入age的编译 
北极那企鹅丶
"age": () => (age)
"age": age
这两种有什么区别呢？ 



16:10
forrest
老师，是不是说在
通过webpack打包的项目中用require引入模块比import引入模块打包的快？ 

16:15
你说的都对
主要是应用在 esmoudle的默认导出对象上 
好大鸭
我再看一下刚才的default的流程 


好大鸭
有点没看懂 
会议用户619087
上一个没看懂。这个看懂了 
happy
es2es里面咋没有n方法呢 
好大鸭
下面的getter 还有一个 a 属性 

