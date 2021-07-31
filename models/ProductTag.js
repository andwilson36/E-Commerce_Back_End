const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}
// Allow products to have multiple tags and tags to have many products by using the ProductTag through model.
ProductTag.init({
    // define columns
    // id
    /*
     * integer
     * doesn't allow null values
     * primary key
     * uses auto increment
     */
    // product_id
    /*
     * integer
     * references the product model's id
     */
    // tag_id
    /*
     * integer
     * references the tag model's id
     */
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
});

module.exports = ProductTag;