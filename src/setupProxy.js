const { createProxyMiddleware } = require('http-proxy-middleware');
const { port } = require('./../package.json');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  );
};
