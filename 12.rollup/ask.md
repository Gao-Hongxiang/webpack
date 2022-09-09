什么是语句
Statement

let a =1;
if(){

};

a++;


a=;
//什么是表达式 

什么是表达式一定会返回一个值

console.log('x')

1+1


expand 展开
把入口模块里的每个语句，用到的变量，把它们的变量定义也取过来，放到输出的结果里



generater是把展开的代码放到了源代码下面了？ 




name 是imports 里面的 
好大鸭
那么是什么变量 
123
导入变量 
123
在msg 里面才是顶级变量 
好大鸭
不是全局变量，那他就是非全局变量 



、、还是没太理解这个作用域的作用 
为什么我要创建作用域链


好大鸭
顶级变量我认为是在本模块中都可以访问到的 
是的
但是有些顶级变量是自己模块定义的
有些顶级变量是外部模块导入的
shine
给儿子找爹！没爹就是全局，。 
yjg
查找变量 
Tony
查找变量 

因为我们现在只关心顶级变量，就是那些没有爹的作用域定义的变量

js运行就是压栈出栈 
123
因为每一层scope的names 中有自己的变量。
只有一层层的找才能知道自己的scope 中的name 有没有某个变量 

只有向上一层层找才知道自己在本作用域内是否可能读取name变量
如果只判断自己有没有定义变量的话。不用往 上找了

自己的scope 的names 中没有找父亲的scope的names 


20:05
wind-zhou
碰到箭头函数咋整呢？好像没有创建作用域 
其实箭头函数也需要创建作用域
能
看下，module和buled实例有什么关系 
项目只有一个bundle
bundle里会有很多的模块
shine
变量不会 对对 

wind-zhou
各种插件什么时候执行的？ 



20:18
好大鸭
也有可能是mode_modules 暂不考虑第三方模块
好大鸭
中的变量 
20:23
好大鸭
绝对路径也可以不用写后缀吧 可以的
丁浩宇
路径要是使用的是别名开头属于相对路径还是绝对路径 
如果配置了别名
那么先解析别名
再重新查找模块
import '@/main.js'

import './src/main.js'
import 'C:\aproject\webpack202208\12.rollup\src/main.js'

wind-zhou
再看一下展开 
三思
为什么importedModule有define方法 
shine
不就是和fetch的逻辑一样 

main.js 也是导出别的模块的变量 

main.js只有导入，没有导出
msg.js只有导出，没有导入
能
递归什么时候return，什么时候不return 
递归肯定 需要一个出口或者说终止条件





好大鸭
如果当前模块中用了一个变量2次，每次都要展开查找一次啊 
如果在一个模块中变量定义了二次


shine撤回了一条消息
好大鸭
是的 
好大鸭
啥时候做的包含 
expandStatement
能
age在什么地方剔除的 
并不是说没用到删除，而用到的拿过来
好大鸭
有点懵 
shine
他没被使用，就不会被define过去 



main.js
import {name} from './msg.js';
console.log(name);
1.找到这个语句读到了或者说使用了哪个变量 name
2.查找此变量name变量它的变量定义语句，添加最终输出的结果里
3.判断name变量是不是外部导入的 
4.如果是先获取外部的模块的定义msg.js
5.找到在msg.js中定义 name变量的语句 var name = 'zhufeng';，放到输出结果 里

msg.js
var name = 'zhufeng';


20:54
能
一个语句是要给module？ 
20:59
好大鸭
修改一个普通值也会对导出结果有影响吗 


能
一个语句是一个modulue吗？ 
肯定 不是
一个文件对应的一个module
文件里的每一行你码对应一个语句，每个语句就是statement
sunShine
module的54行的判断不是很理解 



shine
现在在打包看看 
sunShine
就是输入了一次就变成了true 是的

sunShine
了？？ 
想起来了再展开中盖的状态 

