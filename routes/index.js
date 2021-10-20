const usersRouter = require('./user.routes');
const organizationsRouter = require('./organization.routes');
const proyectRouter = require('./proyect.routes');

const createRoutes = app => {
  app.use('/api/users', usersRouter);
  app.use('/api/organizations', organizationsRouter);
  app.use('/api/proyects', proyectRouter);
};

module.exports = createRoutes;
