const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    
    //CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular
    nome: { type: String, unique: false, required: true},
    cargoPretendido: { type: String, unique: false, required: false},
    profissao: { type: String, unique: false, required: true},      
    dataNascimento: { type: String, unique: false, required: true},
    estadoCivil: { type: String, unique: false, required: false},
    genero: { type: String, unique: false, required: false},
    cepCandidato: { type: String, unique: false, required: true},   
    logradouro: { type: String, unique: false, required: true},   
    numero: { type: Number, unique: false, required: true},   
    bairro: { type: String, unique: false, required: true},
    cidade: { type: String, unique: false, required: true}, 
    uf: { type: String, unique: false, required: false},
    telefone: { type: Number, unique: false, required: false}, 
    celular: { type: Number, unique: false, required: true},  
    contato: { type: Number, unique: false, required: false},
    email: { type: String, unique: true, required: true},
    identidade: { type: String, unique: false, required: false},
    cpfCandidato: { type: Number, unique: true, required: true},
    possuiVeiculo: { type: String, unique: false, required: false},   
    habilitacao: { type: String, unique: false, required: false}
    
}, {
    timestamps: false
    // created_at
    // udated_at
});

module.exports = mongoose.model('Candidate', CandidateSchema);

