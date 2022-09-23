import { render } from './renderModule.js';
render();
window.hotModulesMap = new Map();
var ownPath = '/src/main.js';
import.meta.hot = {
  accept(deps, callback) {
    const ownModule = hotModulesMap.get(ownPath) || {
      id: ownPath,
      callbacks: []
    };
    ownModule.callbacks.push({
      deps,
      callback
    });
    hotModulesMap.set(ownPath, ownModule);
  }
}
if (import.meta.hot) {
  //当main.js接收到renderModule的改变后，会获取新的renderModule模块内容
  //然后执行回调
  import.meta.hot.accept(['./renderModule.js'], ([renderModule]) => {
    renderModule.render();
  });
}