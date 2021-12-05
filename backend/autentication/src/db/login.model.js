const Sequelize = require('sequelize');
const database = require('./db');

database.drop();

const Login = database.define('Login', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true,
    tableName: "login"
})

Login.schema("public");

module.exports = Login;