const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {

        
        const { nome, cargoPretendido, profissao, dataNascimento,
            estadoCivil, genero, cepCandidato, logradouro, numero, bairro,
            cidade, uf, telefone, celular, contato, email, identidade,
            cpfCandidato, possuiVeiculo, habilitacao} = req.body;
        
        const newCandidate = new Candidate();
        
        
        newCandidate.nome = nome;
        newCandidate.cargoPretendido = cargoPretendido;
        newCandidate.profissao = profissao;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.cepCandidato = cepCandidato;
        newCandidate.logradouro  = logradouro;
        newCandidate.numero   = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.telefone = telefone;
        newCandidate.celular  = celular;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpfCandidato = cpfCandidato
        newCandidate.possuiVeiculo = possuiVeiculo;
        newCandidate.habilitacao  = habilitacao;

        

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                //erro no servidor
                return res.status(500).send("Erro");
            }

            return res.status(200).send(savedCandidate);
        });
    },
};