
const { WebSocketServer } = require('ws');
function createWebSocketServer(httpServer) {
  //websocket服务器可以和http服务器共享地址和端口。
  const webSocketServer = new WebSocketServer({ noServer: true });
  //当HTTP服务器接收到客户端发出的升级协议请求的时候
  httpServer.on('upgrade', (req, client, head) => {
    //Sec-WebSocket-Protocol: vite-hmr
    if (req.headers['sec-websocket-protocol'] === 'vite-hmr') {
      //把通信 协议从HTTP协议升级成websocket协议
      webSocketServer.handleUpgrade(req, client, head, (client) => {
        webSocketServer.emit('connection', client, req);//连接成功
      });
    }
  });
  //当服务器监听到客户端的连接 请求成功的时候
  webSocketServer.on('connection', (client) => {
    client.send(JSON.stringify({ type: 'connected' }));
  });
  return {
    on: webSocketServer.on.bind(webSocketServer),//通过on方法可以监听客户端发过来的请求
    off: webSocketServer.off.bind(webSocketServer),//取消监听客户端发过来的请求
    send(payload) {//调用此方法可以向所有的客户端发送消息
      const stringified = JSON.stringify(payload);
      webSocketServer.clients.forEach(client => {//服务器向所有的客户端进行广播 
        client.send(stringified);
      });
    }
  }
}
exports.createWebSocketServer = createWebSocketServer;