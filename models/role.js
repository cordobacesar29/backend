'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
	class Role extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Role.hasMany(models.User, {
				foreignKey: 'roleId',
				as: 'role',
			});
		}
	}
	Role.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Role',
		}
	);
	return Role;
};
=======
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Role.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Role',
    paranoid: true
  });
  return Role;
};
>>>>>>> 3eb71d769b343d9c643468547d84c55bb8bc778d
