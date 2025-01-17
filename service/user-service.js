const User = require('../models/user-model');

//SIG-IN
async function sigIn(username, password){
    const user = await User.findOne({ where: {username: `${username}`,
    password: `${password}`}});

    if(user != null){
        return user.dataValues;
    }else{
        return false;
    }
}

//VERIFICAR SE EXISTE UTILIZADOR
async function findUser(username){
    const user = await User.findOne({ where: {username: `${username}`}});

    if(user){
        return true;
    }else{
        return false;
    }
}

//CRIAR UM USUARIO NOVO
async function post(username, password, admin){
    const userCreated = await User.create({
        username: `${username}`,
        password: `${password}`,
        admin: `${admin}`,

    })
    return userCreated;
};

//GET PARA PEGAR TODOS USERS CRIADOS
async function findAllUsers(){
    const users = await User.findAll();
    if(users.length === 0){
        return false;
    }else{
        return users
    }
};


module.exports = {sigIn, post, findUser, findAllUsers };