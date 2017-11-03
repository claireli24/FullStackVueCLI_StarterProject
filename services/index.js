require('module-alias/register');
const http = require('http'),
      ServerManagerAPI = require('@ServerManagerAPI'),
      ServerManagerServer = http.Server(ServerManagerAPI),
      ServerManagerPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';

ServerManagerServer.listen(ServerManagerPORT, LOCAL, () => console.log(`ServerManagerAPI running on ${ServerManagerPORT}`));