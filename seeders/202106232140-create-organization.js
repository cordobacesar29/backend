'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Organizations',
			[
				{
					name: 'organization test',
					image:
						'https://images.freeimages.com/images/large-previews/23a/three-gondoliers-and-a-duck-1391336.jpg',
					phone: 111552,
					address: 'Organization seeders test',
					welcomeText:
						'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis eius autem eveniet mollitia, at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos, nulla architecto amet voluptates?',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'organization test 2',
					image:
						'https://images.freeimages.com/images/large-previews/23a/three-gondoliers-and-a-duck-1391336.jpg',
					phone: 1115554,
					address: 'Organization seeders test 2 ',
					welcomeText:
						'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque reiciendis eius autem eveniet mollitia, at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos, nulla architecto amet voluptates?',
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
