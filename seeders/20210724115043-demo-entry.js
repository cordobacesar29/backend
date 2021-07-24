'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Entries',
      [
        {
          name: 'Helicopter Ride',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/new-york-helicopter-tour.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          categoryId: 1,
          type: 'news',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Central Park',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2021/04/Central-Park-NYC.jpg',
          content:
            'Tours by helicopters are one of the most famous and fun things to do in NYC, especially for first-time visitors.',
          categoryId: 1,
          type: 'news',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Brooklyn Bridge',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2021/04/Cycle-over-Brooklyn-Bridge.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          categoryId: 1,
          type: 'news',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Manhattan over the Hudson',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2021/04/Central-Park-NYC.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          categoryId: 1,
          type: 'news',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Van Gogh',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/Van-Gogh-Experience.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          categoryId: 1,
          type: 'news',
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
