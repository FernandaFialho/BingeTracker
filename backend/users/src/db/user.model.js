const Sequelize = require('sequelize');
const database = require('./db');

database.drop();

const User = database.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    friends: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        defaultValue: null
    }
},
{
    freezeTableName: true,
    tableName: "users"
})

User.schema("public");

module.exports = User;