const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);

//tes
routes.get('/', (req,res)=>{
    res.send("Hello, im chris");
});


module.exports = routes;



/*
"Candidato: Pedro Santos": {
    "value":{
        "nome": "Pedro Santos",
        "cargoPretendido": "Dev Junior",
        "profissao": "Densenvolvedor",
        "dataNascimento": "23/11/1996",
        "estadoCivil": "Solteiro",
        "sexo": "Masculino",
        "cepCandidato": "88330-345",
        "logradouro": "Rua 2950",
        "numero": "332",
        "bairro": "Centro",
        "cidade": "Baleneário Camboriú",
        "UF": "SC",
        "telefone": "45983398344",
        "celular": "33233454",
        "contato": 45983398344,
        "email": pedro96@gmail.com,
        "identidade": ,
        "cpfCandidato": "23933287634",
        "possuiVeiculo": "Sim",
        "habilitacao": "AB"
    }
}


"Candidato: João": {
        "value": {
            "name": "João Paulo",
            "gender": "Masculino",
            "cep": "00000-000",
            "email": "paulojoao@gmail"
        }
    }

*/
    
    
    