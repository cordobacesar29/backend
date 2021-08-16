'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Organization.hasOne(models.SocialMedia, {
        foreignKey: 'organizationId',
        as: 'socialMedia',
      });
    }
  }
  Organization.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      information: DataTypes.STRING,
      detail: DataTypes.STRING(1000),
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Organization',
      paranoid: true,
    }
  );
  return Organization;
};
