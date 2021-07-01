'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.belongsTo(models.Role, { as: 'role' });
			User.belongsTo(models.Organization, {
				foreignKey: 'organizationId',
				as: 'organization',
			});
		}
	}
	User.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			organizationId: DataTypes.INTEGER,
			roleId: DataTypes.INTEGER,
			deletedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
=======
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {as: 'role'});
      User.belongsTo(models.Organization, {as: 'organization'});
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING,
    organizationId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
>>>>>>> 3eb71d769b343d9c643468547d84c55bb8bc778d
