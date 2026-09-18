'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trainers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trainers.hasMany(models.pokemons,{
        foreignKey: 'trainerId',
        as: 'pokemons'
      })
      // define association here
    }
  }
  trainers.init({
    name: DataTypes.STRING,
    region: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trainers',
  });
  return trainers;
};