'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, { as: 'role', foreignKey: 'roleId' });
      User.belongsTo(models.Organization, {
        as: 'organization',
        foreignKey: 'organizationId',
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      image: DataTypes.STRING,
      password: DataTypes.STRING,
      organizationId: DataTypes.INTEGER,
      roleId: { type: DataTypes.INTEGER, defaultValue: 2 },
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
