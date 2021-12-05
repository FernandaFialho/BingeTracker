const Sequelize = require('sequelize');

const config = require('./config/config.json');
const sequelize = new Sequelize(`${config.production.dialect}://${config.production.username}:${config.production.password}@${config.production.host}/${config.production.database}`);

//postgres://user:password@host:port/dbname

const userDB = async () => {
    try {
        const resultado = await sequelize.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

module.exports = sequelize;