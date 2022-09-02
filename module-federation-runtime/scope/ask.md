没在这个原理中看到 host项目的代码 要用异步的方式加载进来 的必要性 
能
- 加载远程代码块有三种方法
- require.f.j jsonp 加载自己的代码块文件
- require.f.remote 用来加载远程容器  
- require.f.consume 用来加载共享的模块



21:24
shine撤回了一条消息
shine
从代码上看就是按需的 本身remote返回的就是函数 ，是main执行了这个函数返回了远程模块 是的
返回的是一个factory工厂函数，只有当require此模块的时候才会加载
21:40
丁浩宇
vite和vuecli中可以使用模块联邦吗 
最近是可以的
