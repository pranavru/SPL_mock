module.exports = function (app) {
  app.use('/config', require('./routes/config.route'));
  app.use('/players', require('./routes/players.route'));
  app.use('/teams', require('./routes/teams.route'));
};
