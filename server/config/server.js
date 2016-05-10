import routes from '../routes';

export const setupServer = (config, server) => {
  routes(server);
};

export default setupServer;
