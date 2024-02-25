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
    await queryInterface.bulkInsert('Galaxies', [
      {
        name: 'Milky Way',
        size: 1,
        description: 'The galaxy that contains our Solar System.',
        updatedAt,
        createdAt
      },
      {
        name: 'Andromeda',
        size: 1.5,
        description: 'The nearest spiral galaxy to the Milky Way.',
        updatedAt,
        createdAt
      },
      {
        name: 'Triangulum',
        size: 0.06,
        description: 'The third-largest member of the Local Group.',
        updatedAt,
        createdAt
      },
      {
        name: 'Messier 81',
        size: 0.1,
        description: 'A spiral galaxy about 12 million light-years away.',
        updatedAt,
        createdAt
      },
      {
        name: 'Messier 87',
        size: 0.1,
        description:
          'A supergiant elliptical galaxy in the constellation Virgo.',
        updatedAt,
        createdAt
      },
      {
        name: 'Messier 101',
        size: 0.1,
        description: 'A spiral galaxy in the constellation Ursa Major.',
        updatedAt,
        createdAt
      },
      {
        name: 'Messier 51',
        size: 0.1,
        description: 'A spiral galaxy in the constellation Canes Venatici.',
        updatedAt,
        createdAt
      },
      {
        name: 'Messier 33',
        size: 0.1,
        description: 'A spiral galaxy in the constellation Triangulum.',
        updatedAt,
        createdAt
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Galaxies', null, {})
  }
}
