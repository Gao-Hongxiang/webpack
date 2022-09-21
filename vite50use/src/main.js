import { render } from './renderModule';
render();

if (import.meta.hot) {
  //当main.js接收到renderModule的改变后，会获取新的renderModule模块内容
  //然后执行回调
  import.meta.hot.accept(['./renderModule'], ([renderModule]) => {
    renderModule.render();
  });
}