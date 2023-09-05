'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Host extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Host.init({
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    roleId: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Host',
  });
  return Host;
};