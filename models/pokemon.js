'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.pokemons.belongsTo(models.trainers, 
        { foreignKey: 'trainerId', 
          as: 'trainer' });
      // define association here
    }
  }
  pokemon.init({
    name: DataTypes.STRING,
    types: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pokemons',
    freezeTableName: true,
  });
  return pokemon;
};