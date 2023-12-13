const express = require("express");
const bodyP = require("body-parser");
const router = express.Router();

let posts = [
    {id: 123456,
    titulo: "post teste",
    desc: "conteudo do post teste"}
]

router.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts))
})

router.post("/new", bodyP.json(), (req, res)=>{
    let id = gerarId();
    let titulo = req.body.titulo;
    let desc = req.body.desc;

    posts.push({id, titulo, desc})

    res.send("Post enviado com sucesso!")
})

function gerarId(){
    return Math.random().toString(36).substr(2,9);
};

module.exports = router;