const app = require('./routes/app');
const user = require('./routes/user');

module.exports = (server) => {
  app(server);
  user(server);
};
