这里我咋知道应该用tapPromise还是tapAsync呢？有啥技巧么


在回调里如果你反回的promise,就用tapPromise

tapPromise和tapAsync 并没有本质的区别，可以非常方便的相转换



老师 有点迷，就是各种tap太多了，只能一个一个找对吧？根据我的功能来找 