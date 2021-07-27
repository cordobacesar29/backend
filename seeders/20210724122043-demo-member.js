'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'Cecilia Mendez',
          image: 'https://i.imgur.com/E7HBbCE.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marco Fernandez',
          image: 'https://i.imgur.com/2TqM6QC.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'María García',
          image: 'https://i.imgur.com/IeNCUM6.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'María Irola',
          image: 'https://i.imgur.com/qTh3AVZ.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marita Gómez',
          image: 'https://i.imgur.com/N3Gjr40.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miriam Rodríguez',
          image: 'https://i.imgur.com/TWKbORi.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Rodrigo Fuente',
          image: 'https://i.imgur.com/IGZt6Bf.jpeg',
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
