const Sequelize = require('sequelize');
const db = require('../config/db_config');



const Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNULL: false,
        unique: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNULL: false,
    }
})


module.exports = Category;