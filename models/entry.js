'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
	class Entry extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Entry.belongsTo(models.Category, {
				foreignKey: 'categoryId',
				as: 'category',
			});
		}
	}
	Entry.init(
		{
			name: DataTypes.STRING,
			content: DataTypes.STRING,
			image: DataTypes.STRING,
			categoryId: DataTypes.INTEGER,
			type: DataTypes.STRING,
			deletedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Entry',
		}
	);
	return Entry;
=======
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entry.belongsTo(models.Category, { as: 'category' });
    }
  }
  Entry.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      type: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Entry',
      paranoid: true,
    }
  );
  return Entry;
>>>>>>> 3eb71d769b343d9c643468547d84c55bb8bc778d
};
