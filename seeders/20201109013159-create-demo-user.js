'use strict';
const bcrypt = require('bcryptjs');
const { generatehast } = require('../controllers/user.controller');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Camila',
          lastName: 'Demo',
          email: 'camila@admin.com',
          password: generatehast('1234567'),
          image:
          'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Claudio',
          lastName: 'Peralta',
          email: 'clauperalta@admin.com',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          roleId: 1,
          image:
          'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Agustina',
          lastName: 'Siareto',
          email: 'agussiareto@gmail.com',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          roleId: 2,
          image:
          'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Agustino',
          lastName: 'Correa',
          email: 'aguscorrea@gmail.com',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          roleId: 2,
          image:
          'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Cesar',
          lastName: 'Legizamon',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          roleId: 2,
          image:
          'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          email: 'cesarlegizamon@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
