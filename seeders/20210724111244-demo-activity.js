'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Activities',
      [
        {
          name: 'Helicopter Ride',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/new-york-helicopter-tour.jpg',
          content:
            'Tours by helicopters are one of the most famous and fun things to do in NYC, especially for first-time visitors.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Central Park',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2021/04/Central-Park-NYC.jpg',
          content:
            'No visit to New York is complete without popping over to Central Park, the iconic green hub sitting pretty in the middle of Manhattan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Van Gogh art',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/Van-Gogh-Experience.jpg',
          content:
            'Van Gogh: The Immersive Experience is an innovative art exhibition in NYC that displays the universe of Vincent van Gogh in a 360-degree digital composition.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Brooklyn Bridge',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/new-york-helicopter-tour.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Helicopter Ride',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2021/04/Cycle-over-Brooklyn-Bridge.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Manhattan over the Hudson',
          image:
            'https://tourscanner.com/blog/wp-content/uploads/2018/03/one_world_4.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
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
