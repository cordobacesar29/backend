'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Proyects',
      [
        {
          name: 'IDP Matienzo',
          description: 'Iglesia Dios de la Profecía sede Matienzo de Tucumán',
          repositore: 'https://github.com/cordobacesar29/IDPMatienzo',
          link: 'https://idpmatienzo.com/',
          image:
          'https://imgur.com/P7ecLgG.png',
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