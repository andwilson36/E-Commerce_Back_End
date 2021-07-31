const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}
// Category has several product models 
Category.init({
    // define columns
    // id
    /*
     * integer
     * doesn't allow null values
     * primary key
     * uses auto increment
     */
    // category_name
    /*
     * string
     * doesn't allow null values
     */
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
});

module.exports = Category;