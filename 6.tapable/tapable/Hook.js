
class Hook{
  constructor(args=[]) {
    this.args = args;//形参列表存下来 args =['name','age']
    this.taps = [];//这里存放回调函数
    this.call = CALL_DELEGATE;//这是代理的CALL方法
    this.callAsync = CALL_ASYNC_DELEGATE;
    this.promise = PROMISE_DELEGATE;
    this._x=null;
  }
  tap(options,fn) {//如果是通过tap注册的回调，那么类型type=sync,表示fn要以同步的方式调用
    this._tap('sync',options,fn);
  }
  tapAsync(options,fn) {
    this._tap('async',options,fn);
  }
  tapPromise(options,fn) {
    this._tap('promise',options,fn);
  }
  _tap(type,options,fn) {
    if (typeof options === 'string') {
      options = {name:options}
    }
    const tapInfo = { ...options, type, fn };//type是回调函数的类型
    this._insert(tapInfo);
  }
  _insert(tapInfo) {
    this.resetCompilation();
    this.taps.push(tapInfo);
  }
  resetCompilation() {
    this.call = CALL_DELEGATE;//这是代理的CALL方法
    this.callAsync = CALL_ASYNC_DELEGATE;
  }
  _createCall(type) {
    return this.compile({
      taps: this.taps,
      args: this.args,
      type
    });
  }
}
const CALL_DELEGATE = function (...args) {
  //动态创建一个sync类型的call方法
  this.call = this._createCall('sync');
  return this.call(...args);
}
const CALL_ASYNC_DELEGATE = function (...args) {
  this.callAsync = this._createCall('async');
  return this.callAsync(...args);
}
const PROMISE_DELEGATE = function (...args) {
  this.promise = this._createCall('promise');
  return this.promise(...args);
}
module.exports = Hook;