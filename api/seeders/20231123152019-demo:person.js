'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [{
      name: 'Arlem Araujo', 
      active: 1, 
      email: 'arlem@gmail.com', 
      role: 'Student', 
      createdAt: new Date(), 
      updatedAt: new Date()
    },
    {
      name: 'Joao Silva', 
      active: 1, 
      email: 'joao@gmail.com', 
      role: 'Student', 
      createdAt: new Date(), 
      updatedAt: new Date()
    },
    {
      name: 'Kevin Fonseca', 
      active: 1, 
      email: 'kevin@gmail.com', 
      role: 'Teacher', 
      createdAt: new Date(), 
      updatedAt: new Date()
    },
    {
      name: 'Gabriel Pereira', 
      active: 1, 
      email: 'gabriel@gmail.com', 
      role: 'Teacher', 
      createdAt: new Date(), 
      updatedAt: new Date()
    },
    {
      name: 'Lucas Junior', 
      active: 1, 
      email: 'lucas@gmail.com', 
      role: 'Student', 
      createdAt: new Date(), 
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
