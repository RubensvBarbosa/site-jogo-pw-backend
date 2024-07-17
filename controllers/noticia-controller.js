const { post, findAllNoticias } = require('../service/noticia-service');


//CRIAR UMA NOVA NOTICIA
const create = async (req, res, next) => {
    const title = await req.body.title; 
    const text = await req.body.text;
    const createdBy = await req.body.createdBy;

    const newNoticia = await post(title, text, createdBy)
    res.status(200).send(newNoticia)
};

//GET PARA PEGAR TODAS AS NOTICIAS
const getAllNoticias = async (req, res, next) => {
    if(await findAllNoticias()){
        const noticias = await findAllNoticias();
        res.status(200).send(noticias)
    }else{
        res.status(400).json({ message: 'Não existe noticias cadastradas' });
    }
};


module.exports = { create, getAllNoticias };