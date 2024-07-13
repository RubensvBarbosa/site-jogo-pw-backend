const config = require('../service/config-service');
const {sigIn} = require('../service/user-service');



//SIGN-IN
const login = async ( req, res, next) => {
    const username = await req.body.username;
    const password = await req.body.password;

    
    
    if(await sigIn(username, password) == false){
        console.log('FALSE')
        res.status(404).json({ message: 'Usuario não encontrado!'})
    }else{
        console.log('TRUE')
        res.status(200).send(res)
    }
};

module.exports = {login};