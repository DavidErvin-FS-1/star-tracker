'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Star.belongsToMany(models.Planet, {
        through: 'StarsPlanets',
        foreignKey: 'starId'
      })
      Star.belongsTo(models.Galaxy, { foreignKey: 'id' })
    }
  }
  Star.init(
    {
      name: DataTypes.STRING,
      size: DataTypes.INTEGER,
      description: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Star'
    }
  )
  return Star
}
