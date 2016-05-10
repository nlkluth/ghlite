import Hapi from 'hapi';
import config from './server/config/config';
import setupServer from './server/config/server';

const port = process.env.PORT || 8000;
const server = new Hapi.Server();
setupServer(config, server);

server.start(() => {
  console.log(`Starting on port: ${port}`);
});
