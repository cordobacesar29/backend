'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Contacts',
      [
        {
          name: 'Lucas',
          email: 'test@gmail.com',
          phone: '12345678',
          message:
            'Tours by helicopters are one of the most famous and fun things to do in NYC, especially for first-time visitors.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marlene',
          email: 'test@gmail.com',
          message:
            'No visit to New York is complete without popping over to Central Park, the iconic green hub sitting pretty in the middle of Manhattan',
          phone: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Claudio',
          email: 'test@gmail.com',
          message:
            'Van Gogh: The Immersive Experience is an innovative art exhibition in NYC that displays the universe of Vincent van Gogh in a 360-degree digital composition.',
          phone: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nicolas',
          email: 'test@gmail.com',
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          phone: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Cesar',
          email: 'test@gmail.com',
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          phone: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Florencia',
          email: 'test@gmail.com',
          message:
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
