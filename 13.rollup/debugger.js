import { rollup, watch } from 'rollup';
import rollupOptions from './rollup.config.js';
/**
 * rollup的执行分成三个阶段
 * 1.打包阶段
 */
(async function () {
  //1.打包阶段 build hooks是在构建阶段，也就是打包阶段触发的
  //const bundle = await rollup(rollupOptions);
  //buildEnd
  //2.生成阶段
  //await bundle.generate(rollupOptions.output);
  //3.写入阶段
  //await bundle.write(rollupOptions.output);

  const watcher = watch(rollupOptions);
  watcher.on('event', (event) => {
    console.log(event);
  });
  setTimeout(() => {
    watcher.close();
  }, 1000);

  //4.关闭阶段
  //await bundle.close();
})();