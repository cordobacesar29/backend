'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*  */
    }
  }
  Proyect.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      repositore: DataTypes.STRING,
      link: DataTypes.STRING,
      image: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Proyect',
    }
  );
  return Proyect;
};