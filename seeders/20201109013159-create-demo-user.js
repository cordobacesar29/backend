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
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Claudio',
          lastName: 'Peralta',
          email: 'clauperalta@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Maria',
          lastName: 'Rodriguez',
          email: 'mariarodriguez@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Micaela',
          lastName: 'Rodriguez',
          email: 'micarodriguez@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Marcelo',
          lastName: 'Klen',
          email: 'marceloklen@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Gonzalo',
          lastName: 'Persi',
          email: 'gonzapersi@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Gustavo',
          lastName: 'Spring',
          email: 'gusspring@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Carlos',
          lastName: 'Guri',
          email: 'carlosguri@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Sofia',
          lastName: 'Plagio',
          email: 'sofiplagio@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Peter',
          lastName: 'Cascoz',
          email: 'petercascoz@admin.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Claudia',
          lastName: 'Matienzo',
          email: 'claumatienzo@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Josefina',
          lastName: 'Montalva',
          email: 'josemontalva@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Agustina',
          lastName: 'Siareto',
          email: 'agussiareto@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Agustino',
          lastName: 'Correa',
          email: 'aguscorrea@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Cesar',
          lastName: 'Legizamon',
          email: 'cesarlegizamon@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Hugo',
          lastName: 'Ondura',
          email: 'hugoondura@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Leandro',
          lastName: 'Povich',
          email: 'leapovich@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Eugenia',
          lastName: 'sexto',
          email: 'eugesexto@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Leonardo',
          lastName: 'Gomarca',
          email: 'leogomarca@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Matias',
          lastName: 'Gulibe',
          email: 'matiasgulibe@gmail.com',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          // Important: Password not encrypted yet!
          password: generatehast('1234567'),
          organizationId: 1,
          roleId: 2,
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
