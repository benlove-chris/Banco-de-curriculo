

const dadosFormulario = () => {
    

    let dados = {   
        /*

        nome: document.getElementById('nome').value,
        cargoPretendido: document.getElementById('cargoPretendido').value,
        profissao: document.getElementById('profissao').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        genero: document.getElementById('genero').value,
        cepCandidato: document.getElementById('cepCandidato').value,
        logradouro: document.getElementById('logradouro').value,
        numeroCasa: document.getElementById('numeroCasa').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('uf').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        contato: document.getElementById('contato').value,
        email: document.getElementById('email').value,
        identidade: document.getElementById('identidade').value,
        cpfCandidato: document.getElementById('cpfCandidato').value,
        possuiVeiculo: document.getElementById('possuiVeiculo').value,
        habilitacao: document.getElementById('habilitacao').value 

        */
        
        nome: "Pedro Santos",
        cargoPretendido: "Dev Junior",
        profissao: "Densenvolvedor",
        dataNascimento: "23-11-1998",
        estadoCivil: "Solteiro",
        sexo: "Masculino",
        cepCandidato: "88330-345",
        logradouro: "Rua 2950",
        numeroCasa: 332,
        bairro: "Centro",
        cidade: "Baleneário Camboriú",
        uf: "SC",
        telefone: 33233454,
        celular: 45983398344,
        contato: 45983398344,
        email: "pedro80@gmail.com",
        identidade: "29888987",
        cpfCandidato: 39332876745,
        possuiVeiculo: "Sim",
        habilitacao: "AB" 
        
    };

    console.log(dados);
    return dados


}



const cadastrarCandidato = async(candidato) => {

    try {
        const candidato = fetch('http://localhost:5000/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosFormulario())
        });
        if (candidato.status === 500) {
            alert("Deu certo ae");
        }

    }catch (error) {
            alert("Deu errrrrrrrrrrrrado");
            console.log(dadosFormulario());
            alert("Deu errrrrrrrrrrrrado");
        }

}





function cliq(){
    var numeroCasa = document.getElementById('numeroCasa');
    console.log(numeroCasa);
}
