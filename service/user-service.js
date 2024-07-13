const User = require('../models/user-model');

//SIG-IN
async function sigIn(username, password){

    const user = await User.findOne({ where: {username: `${username}`,
    password: `${password}`}});

    if(user != null){
        return user;
    }else{
        return false;
    }
}


module.exports = {sigIn};