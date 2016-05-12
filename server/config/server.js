const routes = require('../routes');

exports.setupServer = (config, server) => {
  routes(server);
};
