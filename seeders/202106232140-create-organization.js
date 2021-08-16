'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Organizations',
      [
        {
          name: 'Coderhood',
          image: 'https://imgur.com/cFSehga.png',
          information: "coderhood es una plataforma que promueve el aprendizaje autodidacta",
          detail: 'aqui van los detalles',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Alkemy',
          image: 'https://imgur.com/rQkLEIg.png',
          information: "calkemy es una asceleración de no sé que pingo, pero lo hice",
          detail: 'aqui van  otros detalles mas los detalles',
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
