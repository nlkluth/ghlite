const user = require('./routes/user');

module.exports = (server) => {
  user(server);
};
