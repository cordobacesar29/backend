'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'test 1',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum necessitatibus illo ea culpa, architecto inventore at ut. Ut exercitationem officiis quia provident blanditiis eos odit eum deserunt, non hic.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'test 2',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum necessitatibus illo ea culpa, architecto inventore at ut. Ut exercitationem officiis quia provident blanditiis eos odit eum deserunt, non hic.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'test 3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum necessitatibus illo ea culpa, architecto inventore at ut. Ut exercitationem officiis quia provident blanditiis eos odit eum deserunt, non hic.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'test 4',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum necessitatibus illo ea culpa, architecto inventore at ut. Ut exercitationem officiis quia provident blanditiis eos odit eum deserunt, non hic.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'test 5',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum necessitatibus illo ea culpa, architecto inventore at ut. Ut exercitationem officiis quia provident blanditiis eos odit eum deserunt, non hic.',
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
