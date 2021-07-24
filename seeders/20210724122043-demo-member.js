'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'Helicopter Ride',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/new-york-helicopter-tour.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Central Park',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2021/04/Central-Park-NYC.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Van Gogh art',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/Van-Gogh-Experience.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Brooklyn Bridge',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/new-york-helicopter-tour.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Helicopter Ride',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2021/04/Cycle-over-Brooklyn-Bridge.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Manhattan over the Hudson',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/one_world_4.jpg',
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
