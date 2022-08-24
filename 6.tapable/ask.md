异步串行怎么感觉和同步一样了 


task1 task2 task3

相同点 都是一个一个来，

不同点 同步里不能出现异步代码 setTimeout,异步串行就可以使用异步代码promise async await setTimeout

那如果SyncHook中某一个有返回值，这个返回值是不是被忽略了
是的
 

