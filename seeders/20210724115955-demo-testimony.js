'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Testimonies',
      [
        {
          name: 'Graciela Camino',
          image:
            'https://static.wixstatic.com/media/584e5c_eb4d109e04a14db795fabe197896dd36~mv2.jpeg/v1/fill/w_620,h_268,al_c,q_80,usm_0.66_1.00_0.01/pexels-photo-4130688.webp',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Martin Peralta',
          image: 'https://i.imgur.com/PqbUkuV.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Camila Spitze',
          image:
            'https://magisterenperiodismo.com/elfenix/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-05-at-11.28.48-2-1024x768.jpeg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Esmeralda Martínez',
          image:
            'https://futbol4life.com/wp-content/uploads/2021/03/7-ngo-help-children-07.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ezequiel López',
          image:
            'http://ebuenasnoticias.com/wp-content/uploads/2014/12/ninos_ong_idea_libre_ok.jpg',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non magnam quam possimus praesentium tempora. Commodi, quam, hic officiis ullam suscipit minima, atque mollitia saepe similique culpa quasi. Tempora, deleniti molestias.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Claudio Giralt',
          image:
            'https://borgenproject.org/wp-content/uploads/NGOs-Have-Evolved-1030x686.jpg',
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
