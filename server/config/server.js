const routes = require('../routes');

exports.setupServer = (config, server) => {
  server.connection({
    port: process.env.PORT || 8000,
    host: '0.0.0.0'
  });

  routes(server);
};
