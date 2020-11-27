const { proxy } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('registrations', {
      target: 'https://infinite-ocean-27248.herokuapp.com',
      changeOrigin: true,
    }),
  );

  app.use(
    proxy('sessions', {
      target: 'https://infinite-ocean-27248.herokuapp.com/',
      changeOrigin: true,
    }),
  );

  app.use(
    proxy('logged_in', {
      target: 'https://infinite-ocean-27248.herokuapp.com/',
      changeOrigin: true,
    }),
  );
};
