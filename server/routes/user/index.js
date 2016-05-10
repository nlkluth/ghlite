const internals = {};

internals.getUser = (request, reply) => {
  reply('Ok');
};

export default (server) => {
  server.route({
    method: 'GET',
    path: '/api/user',
    config: {
      handler: internals.getUser
    }
  });
}
