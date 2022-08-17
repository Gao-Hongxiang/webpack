丁浩宇
还有在模块内，为什么我使用process.env.NODE_ENV不报错，而使用process.env.username，就报process not defined 

process.env.NODE_ENV只是一个字符串，在编译阶段会经过字符串的替换，
替换同成development或者production

process.env.username
在浏览里并没有process这样的对象

陈柳鹏
忘记开默认静音了？ 
北极那企鹅丶
process是node里面的 



北源
我们源码不是声明了一个字符串吗 怎么编译以后成了声明函数了 
能
ast语法树一个标准吗？babel和别人实现的一样吗 
是的
能
转换出来的ast语法树和别家的结构一样吗 
水星
types是辅助库吗?感觉老师用types很多的 、
是的

陈柳鹏
types 是类型依赖好像 d.ts? 
不依赖
这里的types和d.ts没有任何关系
水星
会出现住多个人的情况吗? 
不会
丁浩宇
好像都是jquery的方法 


20:30
好大鸭
vscode 写代码是不是一直在匹配ast 
北源
怎么区分 var str = "function a(){}" 和 function b (){}啊 
20:34
黑子
为什么 是 源代码是字符串呀 
北源
似乎明白了  sourceCode变量 就是文件内容 所以是字符串  
黑子
1 
今天有风
把type改了 是不是就行了 
好大鸭
this呢 
能
visitor是不是bable提供的方法，es还得自己遍历判断？ 
visitor是一个属性，在 babel内部会生成语法树，还会遍历语法树，还会应用我们的给它提供的visitor
shine
babel就是提供语法转换，且遍历 
wind-zhou
谁会消费这个语法树呀？ 访问器也就是插件来消费
丁浩宇
types.isBlockStatement(body)应该是node.body吧 





水星
这里判断必须取反吗?不能直接指定类型吗? 
建文
回答：怎么区分，一个是函数定义，一个是函数声明 
定义一个函数
可以用函数声明，也可以用函数表达式
function ast(){}
let ast = function(){}
丁浩宇
可以在讲一下visitor的概念吗 
访问器
崔
(a,b)=>{return a+b}  这个转了以后会加两个return吗 
好大鸭
箭头函数在创建的时候已经确定this了 
20:51
好大鸭
根节点在不同环境是不一样的，怎么处理 
今天有风
找到根节点 是类似根据作用域来找吗
节点路径之间的关系
和作用域的上下级关系没有必然联系 
好大鸭
外层函数还有可能bind其他this 


function a(){ 
  var b = 1;
  function c(){
    var f = 2;
    let g = {
       h:()=>{

       }
    }
  }
}

let obj = {
  a:{
    b:{
      c:{
        d:'zhufeng'
      }
    }
  }
}


为什么 29 行是 path.isArrowFunction 
丁浩宇
嵌套的箭头函数里面调用this是怎么递归解析的 
今天有风
那假如和函数c平级的函数  会用到吗 
333
function a(){

}
function b(){

}

21:05
没离开过
那应该是 parent.isArrowFunction 吧 
能
这些方法，都是babla提供的吧 是的
好大鸭
想看看let/const 的局部作用域是怎么实现的 
这个会在后面我们手写rollup的时候实现
能
esprima没有这些方法 
