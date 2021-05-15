const express = require('express');
const router = express.Router();
const axios = require('axios').default;

/*
 * Despesa:
 * id : string
 * mes : string
 * valorTotal : string
*/

//retorna todas as categorias do bd.


//retorna uma categoria dada pelo id, mes
router.get('/:id', function(req, res) {
    let categoria = axios.get("urlHere(caminho do arquivo)" + '/:' + req.params.id);
    res.send(categoria);
});

//Cadastra uma categoria
router.post('/', function(req, res){
    const categoria = {
        nome: req.body.nome, 
        descricao: res.body.descricao,
    }

    axios.post("urlHere(caminho do arquivo)", categoria);
    res.send(categoria);
});

//Deleta categoria
router.delete('/:id', function(req, res)
{
    let categoria = axios.delete("urlHere(caminho do arquivo)" + '/:' + req.params.id);
    res.send(categoria);
});

//Update categoria
router.put('/:id', function(req, res){
    let categoria = axios.put(
        "urlHere(caminho do arquivo)" + '/:' + req.params.id,
        req.body
    );
    res.send(categoria);
});

module.exports = router;