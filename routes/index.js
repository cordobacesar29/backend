const usersRouter = require('./user.routes');
const sendmailRouter = require('./sendmail.routes');
const newsRouter = require('./news.routes');
const testimonyRouter = require('./testimony.routes');
const activityRouter = require('./activity.routes');
const organizationsRouter = require('./organization.routes');
const memberRouter = require('./member.routes');
const contactRouter = require('./contact.routes');
const categoryRouter = require('./category.routes');
const sliderRouter = require('./slider.routes');

const createRoutes = app => {
  app.use('/api/users', usersRouter);
  app.use('/api/news', newsRouter);
  app.use('/api/sendmail', sendmailRouter);
  app.use('/api/testimonials', testimonyRouter);
  app.use('/api/activities', activityRouter);
  app.use('/api/organizations', organizationsRouter);
  app.use('/api/members', memberRouter);
  app.use('/api/contact', contactRouter);
  app.use('/api/categories', categoryRouter);
  app.use('/api/sliders', sliderRouter);
};

module.exports = createRoutes;
