
class HookCodeFactory{
  setup(hookInstance,options) {
    hookInstance._x = options.taps.map(tapInfo=>tapInfo.fn);
  }
  init(options) {
    this.options = options;
  }
  args(config = {}) {
    const { after } = config;
    let allArgs = [...this.options.args]
    if (after) {
      allArgs.push(after);
    }
    return allArgs.join(',');//name,age,_callback
  }
  header() {
    let code = ``;
    code += `var _x = this._x;\n`;
    return code;
  }
  create(options) {
    this.init(options);
    let fn;
    //判断你要创建的函数的类型
    switch (options.type) {
      case 'sync'://创建一个同步执行的函数
        fn = new Function(
          this.args(),
          this.header()+this.content()
        );
        break;
      case 'async':
        fn = new Function(
          this.args({ after: '_callback' }),
          this.header()+this.content({onDone:()=>"_callback();\n"})
        );
        break;
      case 'promise':
        let tapsContent = this.content({onDone:()=>"_resolve();\n"});
        let content = `return new Promise(function (_resolve, _reject) {
          ${tapsContent}
        });`;
        fn = new Function(
          this.args(),
          this.header()+content
        );
        break;
    }
    this.deinit();
    return fn;
  }
  deinit() {
    this.options = null;
  }
  callTapsSeries() {
    let code = '';
    for (let j = 0; j < this.options.taps.length; j++){
      const tapContent = this.callTap(j);
      code += tapContent;
    }
    return code;
  }
  callTapsParallel({ onDone}) {
    const taps = this.options.taps;
    let code = ``;
    code += `var _counter = ${taps.length};\n`;
    code += `
      var _done = function () {
        ${onDone()}
      };
    `;
    for (let i = 0; i < taps.length; i++){
      const tapContent = this.callTap(i);
      code += tapContent;
    }
    return code;
  }
  //获取每一个回调它的代码
  callTap(tapIndex) {
    let code = ``;
    code += `var _fn${tapIndex} = _x[${tapIndex}];\n`;//取出回调函数
    let tapInfo = this.options.taps[tapIndex];
    switch (tapInfo.type) {
      case 'sync':
        code += `_fn${tapIndex}(${this.args()});\n`;//执行回调函数
        break;
      case 'async':
          code += `_fn${tapIndex}(${this.args()}, function () {
            if (--_counter === 0) _done();
          });\n`;//执行回调函数
        break;
      case 'promise':
        code += `
        var _promise${tapIndex} = _fn${tapIndex}(${this.args()});
        _promise${tapIndex}.then(function () {
          if (--_counter === 0) _done();
        });
        `;
          break;
    }
    return code;
  }
}
module.exports = HookCodeFactory;