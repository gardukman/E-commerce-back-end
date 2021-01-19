const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // sets id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // sets the foreign key for the product
    prod_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product'
      }
    },
    // sets the foreign key for the tag
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag'
      }
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
