const models = require('@ServerManager/app/setup');

module.exports = (app) => {
  const api = app.ServerManagerAPI.app.api.user;

  app.route('/api/v1/signup')
     .post(api.signup(models.User));
}
