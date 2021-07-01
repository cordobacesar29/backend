'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
	class Category extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Category.hasMany(models.Entry, {
				foreignKey: 'categoryId',
				as: 'entries',
			});
		}
	}
	Category.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			deletedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Category',
		}
	);
	return Category;
=======
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Category',
      paranoid: true,
    }
  );
  return Category;
>>>>>>> 3eb71d769b343d9c643468547d84c55bb8bc778d
};
