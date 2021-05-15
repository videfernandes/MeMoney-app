const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const ValidaGasto = require('../Validacoes/validaGasto');

//instacia objeto de validação Gasto
const valida = new ValidaGasto();

/*
 * Gasto:
 * id :  string
 * categoria: Categoria
 * valor: double
 * descricao : string
*/

//retorna todas os gastos do bd.
router.get('/', function(req, res) {
    let gastos = [];
    gastos = axios.get("urlHere(caminho do arquivo)");
    res.send(gastos);
});

//retorna um gasto do bd por id - no início pega todos os gastos
router.get('/:id', function(req, res) {
    let gastos = [];
    gastos = axios.get("urlHere(caminho do arquivo)");
    const gasto = gastos.find(x => x.id == parseInt(req.params.id));
    
    //404 not found
    if(!valida.validaGetID(gasto))
        return res.status(404).send('Gasto referente ao id' + req.params.id + ' não encontrado');
    
    res.send(categoria);
});

//Cadastra uma gasto
router.post('/', function(req, res){
    //400 bad request
    if(!valida.validaPost({categoria: req.body.categoria, valor: req.body.valor }))
        return res.status(400).send('Dados insuficientes');

    const gasto = {
        id: -1,
        categoria : req.body.categoria,
        valor: req.body.valor, 
        descricao: res.body.descricao,
    }

    axios.post("urlHere(caminho do arquivo)", gasto);
    res.send(gasto);
});

//Deleta gasto - no início pega todos os gastos
router.delete('/:id', function(req, res)
{
    let gastos = [];
    gastos = axios.get("urlHere(caminho do arquivo)");
    const gasto = gastos.find(x => x.id == parseInt(req.params.id));

    if(!valida.validaGetID(gasto))
        return res.status(404).send('Gasto referente ao id' + req.params.id + ' não encontrado');

    axios.delete("urlHere(caminho do arquivo)", gasto);
    res.send(gasto);
});

//Update gasto - no início pega todos os gastos
router.put('/:id', function(req, res){
    if(!valida.validaPost({categoria: req.body.categoria, valor: req.body.valor }))
        return res.status(400).send('Dados insuficientes');
 
    let gastos = [];
    gastos = axios.get("urlHere(caminho do arquivo)");
    const gasto = gastos.find(x => x.id == parseInt(req.params.id));

    if(!valida.validaGetID(gasto))
        return res.status(404).send('Gasto referente ao id' + req.params.id + ' não encontrado');

    axios.post("urlHere(caminho do arquivo)");

    res.send(categoria);
});

module.exports = router;