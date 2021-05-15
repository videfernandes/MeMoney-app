const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const ValidaCategoria = require('../Validacoes/validaCategoria');

//instacia objeto de validação Gasto
const valida = new ValidaCategoria();

/*
 * Categoria:
 * nome : string
 * descricao : string
*/

//retorna todas as categorias do bd.
router.get('/', function(req, res) {
    let categorias = [];
    categorias = axios.get("urlHere");
    res.send(categorias);
});

//retorna uma categoria dada pelo id,  no início pega todas as categorias.
router.get('/:id', function(req, res) {
    let categorias = [];
    categorias = axios.get("urlHere");
    
    const categoria = categorias.find(x => x.nome == req.params.id);
    
    //404 not found
    if(!valida.validaGetID(categoria))
        return res.status(404).send('Gasto referente ao id' + req.params.id + ' não encontrado');
    
    res.send(categoria);
});

//Cadastra uma categoria
router.post('/', function(req, res){
    //400 bad request
    if(!valida.validaPost({ nome: req.body.nome }))
        return res.status(400).send('Dados insuficientes');
    
    const categoria = {
        nome: req.body.nome, 
        descricao: res.body.descricao,
    }

    axios.post("urlHere(caminho do arquivo)", categoria);
    res.send(categoria);
});

//Deleta categoria, no início pega todas as categorias.
router.delete('/:id', function(req, res)
{
    let categorias = [];
    categorias = axios.get("urlHere");
    
    const categoria = categorias.find(x => x.nome == req.params.id);
    
    //404 not found
    if(!valida.validaGetID(categoria))
        return res.status(404).send('Gasto referente ao id' + req.params.id + ' não encontrado');
    
    res.send(categoria);
});

//Update categoria,  no início pega todas as categorias.
//Salvar o valor enviado diretamente
router.put('/:id', function(req, res){
    if(!valida.validaPost({ nome: req.body.nome }))
        return res.status(400).send('Dados insuficientes');
 
    let categorias = [];
    categorias = axios.get("urlHere");
    
    const categoria = categorias.find(x => x.nome == req.params.id);
    
    //404 not found
    if(!valida.validaGetID(categoria))
        return res.status(404).send('Gasto referente ao id' + req.params.id + ' não encontrado');
    
    axios.put("urlHere(caminho do arquivo)/:" + req.params.id, req.body);
    res.send(categoria);
});

module.exports = router;