const {sigIn, post, findUser, findAllUsers} = require('../service/user-service');

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
        return res.status(400).json({ message: 'Já existe usuario cadastrado' });
    }else{
        const newUser = await post(username, password, admin)
        res.status(200).send(newUser)
    }
};

//GET PARA PEGAR TODOS USERS CRIADOS
const getAllUsers = async (req, res, next) => {
    if(await findAllUsers()){
        const users = await findAllUsers();
        res.status(200).send(users)
    }else{
        res.status(400).json({ message: 'Não existe usuarios cadastrados' });
    }
};

module.exports = {login, create, getAllUsers};