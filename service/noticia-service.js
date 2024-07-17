const Noticia = require('../models/noticia-model');

//CRIAR UMA NOVA NOTICIA
async function post(title, text, createdBy){
    const noticiaCreated = await Noticia.create({
        title: `${title}`,
        text: `${text}`,
        createdBy: `${createdBy}`,

    })
    return noticiaCreated;
};

//GET PARA PEGAR TODAS AS NOTICIAS
async function findAllNoticias(){
    const noticias = await Noticia.findAll();
    if(noticias.length === 0){
        return false;
    }else{
        return noticias
    }
};


module.exports = { post, findAllNoticias };