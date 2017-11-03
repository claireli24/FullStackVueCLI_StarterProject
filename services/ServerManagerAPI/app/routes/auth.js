const models = require('@ServerManager/app/setup');

module.exports = (app) => {
  const api = app.ServerManagerAPI.app.api.auth;

  app.route('/')
     .get((req, res) => res.send('Server Manager API'));

  app.route('/api/v1/auth')
     .post(api.login(models.User));
}
