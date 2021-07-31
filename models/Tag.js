const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}
// Tag belongs to many Product models. 
Tag.init({
    // define columns
    // id
    /*
     * integer
     * doesn't allow null values
     * primary key
     * uses auto increment
     */
    // tag_name
    /*
     * string
     */
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
});

module.exports = Tag;