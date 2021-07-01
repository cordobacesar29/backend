'use strict';

module.exports = {
<<<<<<< HEAD
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					firstName: 'Usuario',
					lastName: 'Demo',
					email: 'test@test.com',
					// Important: Password not encrypted yet!
					password: '1234',
					organizationId: 1,
					roleId: 1,
					// image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},
=======
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Usuario',
      lastName: 'Demo',
      email: 'test@test.com',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      // Important: Password not encrypted yet! 
      password: '1234',
      organizationId: 1,
      roleId: 1,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },
>>>>>>> 3eb71d769b343d9c643468547d84c55bb8bc778d

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
