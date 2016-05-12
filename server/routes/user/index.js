const internals = {};

internals.getUser = (request, reply) => {
  reply('Ok');
};

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/api/user',
    config: {
      handler: internals.getUser
    }
  });
};
