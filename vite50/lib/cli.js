const { createServer } = require('./server');
(async function () {
  const server = await createServer();
  server.listen(9998, () => console.log('server started on 9998'));
})();