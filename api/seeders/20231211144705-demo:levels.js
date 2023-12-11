module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Levels', [
			{
				description: 'basic',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				description: 'intermediate',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				description: 'advanced',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Levels', null, {})
  }
}
