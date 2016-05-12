const renderToString = require('react-dom/server').renderToString;
const CoreLayout = require('../../../src/components/layout/CoreLayout');
const internals = {};

internals.application = (request, reply) => {
  const html = renderToString(CoreLayout);
  return reply(`
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
};

module.exports = (server) => {
  server.route([{
    method: 'GET',
    path: '/{param}',
    config: {
      handler: internals.application
    }
  }]);
};
