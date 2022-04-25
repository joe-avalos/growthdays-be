'use strict';

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
    await queryInterface.bulkInsert('Cats', [
      {
        name: 'Whiskers',
        age: 4,
        breed: 'Persian',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MeowTwo',
        age: 84,
        breed: 'Pokemon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Benito',
        age: 8,
        breed: 'Topcat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },
  
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cats', null, {})
  }
};
