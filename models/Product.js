// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}
// product belongs to category
// Product belongs to many Tag models
// set up fields and rules for Product model
Product.init({
    // define columns
    // id
    /*
     * integer
     * doesn't allow null values
     * primary key
     * uses auto increment
     */
    // product_name
    /*
     * string
     * doesn't allow null values
     */
    // price 
    /*
     * decimal
     * doesn't allow null values
     * validates that value is a decimal
     */
    // stock
    /*
     * integer
     * doesn't allow null values'
     */
    // category_id
    /*
     * integer
     * references the categories model's id
     */
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});

module.exports = Product;