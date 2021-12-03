const User = require('./user.model');

const seedingDB = () => {

    seedData = [
        {
            "name": "Luiz silva",
            "friends": [
                2, 3, 4
            ]
        },
        {
            "name": "Nando silva"
        },
        {
            "name": "Matheus",
            "friends": [
                2, 3, 4
            ]
        },
        {
            "name": "João"
        },
        {
            "name": "Bento",
            "friends": [
                2, 3, 4
            ]
        },
        {
            "name": "Sabrina",
            "friends": [
                2, 3, 4
            ]
        },
        {
            "name": "Fernanda",
            "friends": [
                6, 3, 4
            ]
        },
        {
            "name": "Luiz silva",
            "friends": [
                2, 4
            ]
        }
    ];
    
    return Promise.all(seedData.map(data => User.create(data)))


    // seedData.forEach(async data => {
    //     try {
    //         await User.create(data);
    //     } catch (error) {
    //         console.log("erro ao adicionar seed", error);
    //     }
    // });
};

module.exports = seedingDB;
