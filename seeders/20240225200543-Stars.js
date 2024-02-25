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
      'Stars',
      [
        {
          name: 'Sun',
          size: 1,
          description: 'The star at the center of the Solar System.',
          updatedAt,
          createdAt
        },
        {
          name: 'Sirius',
          size: 2.02,
          description: 'The brightest star in the night sky.',
          updatedAt,
          createdAt
        },
        {
          name: 'Alpha Centauri',
          size: 1.1,
          description: 'The closest star system to the Solar System.',
          updatedAt,
          createdAt
        },
        {
          name: 'Arcturus',
          size: 25.4,
          description:
            'The brightest star in the northern celestial hemisphere.',
          updatedAt,
          createdAt
        },
        {
          name: 'Vega',
          size: 2.135,
          description:
            'The brightest star in the northern constellation of Lyra.',
          updatedAt,
          createdAt
        },
        {
          name: 'Canopus',
          size: 71.4,
          description:
            'The brightest star in the southern constellation of Carina.',
          updatedAt,
          createdAt
        },
        {
          name: 'Capella',
          size: 10.1,
          description:
            'The brightest star in the northern constellation of Auriga.',
          updatedAt,
          createdAt
        },
        {
          name: 'Rigel',
          size: 120,
          description: 'The brightest star in the constellation of Orion.',
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
    await queryInterface.bulkDelete('Stars', null, {})
  }
}
