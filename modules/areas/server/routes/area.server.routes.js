'use strict';

module.exports = function (app) {
  // User Routes
  var areas = require('../controllers/area.server.controller');

  // adding a new area to alert around
  app.route('/api/areas').post(areas.create);

  // route that the users will poll to get the latest alerts
  // app.route('/api/areas').get(areas.getAreas);

  
  // app.route('/api/users/accounts').delete(users.removeOAuthProvider);
  // app.route('/api/users/password').post(users.changePassword);
  // app.route('/api/users/picture').post(users.changeProfilePicture);

  // Finish by binding the user middleware
  // app.param('userId', users.userByID);
};
