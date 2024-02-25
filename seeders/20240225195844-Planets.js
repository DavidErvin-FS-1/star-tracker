'use strict'
const [createdAt, updatedAt] = [new Date(), new Date()]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Planets',
      [
        {
          name: 'Mercury',
          size: 0.382,
          description:
            'The smallest planet in the solar system (second smallest if you include Pluto) and the closest to the Sun.',
          updatedAt,
          createdAt
        },
        {
          name: 'Venus',
          size: 0.949,
          description:
            'The second planet from the Sun. It is named after the Roman goddess of love and beauty.',
          updatedAt,
          createdAt
        },
        {
          name: 'Earth',
          size: 1,
          description:
            'The third planet from the Sun and the only astronomical object known to harbor life.',
          updatedAt,
          createdAt
        },
        {
          name: 'Mars',
          size: 0.532,
          description:
            'The fourth planet from the Sun and the second-smallest planet in the solar system.',
          updatedAt,
          createdAt
        },
        {
          name: 'Jupiter',
          size: 11.209,
          description:
            'The fifth planet from the Sun and the largest in the solar system.',
          updatedAt,
          createdAt
        },
        {
          name: 'Saturn',
          size: 9.449,
          description:
            'The sixth planet from the Sun and the second-largest in the solar system.',
          updatedAt,
          createdAt
        },
        {
          name: 'Uranus',
          size: 4.007,
          description:
            'The seventh planet from the Sun and the third-largest in the solar system.',
          updatedAt,
          createdAt
        },
        {
          name: 'Neptune',
          size: 3.883,
          description:
            'The eighth and farthest known Solar planet from the Sun.',
          updatedAt,
          createdAt
        },
        {
          name: 'Pluto',
          size: 0.186,
          description:
            "The ninth and smallest planet in the solar system. We don't deny it! After all don't want to anger the God of the underworld.",
          updatedAt,
          createdAt
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Planets', null, {})
  }
}
