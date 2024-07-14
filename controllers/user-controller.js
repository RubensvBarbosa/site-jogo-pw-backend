const config = require('../service/config-service');
const {sigIn, post, findUser} = require('../service/user-service');

//FAZER LOGIN
const login = async ( req, res, next) => {
    const username = await req.body.username;
    const password = await req.body.password;

    const user = await sigIn(username, password)

    if(user){
        res.status(200).send(user)
    }else {
        res.status(404).json({ message: 'Usuario não encontrado!'})
    }
};

//CRIAR UM USUARIO NOVO
const create = async (req, res, next) => {
    const username = await req.body.username; 
    const password = await req.body.password;
    const admin = await req.body.admin;

    if(await findUser(username)){
        return res.status(400).json({ message: 'Username already exists' });
    }else{
        const newUser = await post(username, password, admin)
        res.status(200).send(newUser)
    }
};



module.exports = {login, create};