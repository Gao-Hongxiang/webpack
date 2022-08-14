
import('./hello.js').then(result => {
  console.log(result.default);
  import('./hello.js').then(result => {
    console.log(result.default);
  });
});