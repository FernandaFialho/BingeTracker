const Login = require('./login.model');

const seedingDB = () => {

    seedData = [
        {
            "id": 1,
            "username": "Luiz_silva",
            "password": "1234"
        },
        {
            "id": 2,
            "username": "nando",
            "password": "1234"
        }
    ];
    
    return Promise.all(seedData.map(data => Login.create(data)))


    // seedData.forEach(async data => {
    //     try {
    //         await User.create(data);
    //     } catch (error) {
    //         console.log("erro ao adicionar seed", error);
    //     }
    // });
};

module.exports = seedingDB;
