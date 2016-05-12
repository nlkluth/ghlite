const Hapi = require('hapi');
const config = require('./server/config/config');
const setupServer = require('./server/config/server').setupServer;

const port = process.env.PORT || 8000;
const server = new Hapi.Server();
setupServer(config, server);

server.start(() => {
  console.log(`Starting on port: ${port}`);
});
