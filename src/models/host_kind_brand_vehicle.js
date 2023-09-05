'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Host_Kind_Brand_Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Host_Kind_Brand_Vehicle.init({
    hostId: DataTypes.INTEGER,
    kindId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Host_Kind_Brand_Vehicle',
  });
  return Host_Kind_Brand_Vehicle;
};