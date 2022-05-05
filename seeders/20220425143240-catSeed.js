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
        image: 'https://placekitten.com/g/250/300',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MeowTwo',
        age: 84,
        breed: 'Pokemon',
        image: 'https://placekitten.com/g/280/300',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Benito',
        age: 8,
        breed: 'Topcat',
        image: 'https://placekitten.com/g/200/300',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },
  
  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cats', null, {})
  }
};
