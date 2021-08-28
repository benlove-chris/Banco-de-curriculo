/*
function cadastrar(){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
    const form = document.querySelector("form");
    let data = new FormData(form);
    console.log(data);
    
    const user =  axios.post('http://localhost:5000/register', form);
    if (user.status === 200) {
        alert('iti malia deu certo');
      }else{
        console.log("ERRRRRRRRO");
        alert("Comunicação funcionando");
      }

    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEE");

}   



function chamar(){
    alert("ola");
}



window.addEventListener("load", () => {
    
    const form = document.querySelector("form");
    console.log("Olá chris");
    console.log(form);
    console.log("TEste");
    const data = new FormData(form);
    console.log(data);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = new FormData(form);
        console.log(data);

        axios({
            method: "post",
            url: "/",
            data: data,
        })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    throw err;
                });
    });
});


function criarr() {
    // body...


    const criar = async () => {
        const form = document.querySelector("form");
        const data = new FormData(form);
        console.log("COnexao estavel");
        console.log(form);
        const user = await axios.post('http://localhost:5000/register', data);
        console.log("COnexao estavel 2");
        if (user.status === 200) {
            alert('iti malia deu certo');
          } else{
            console.log("ERRRRRRRO");
             }
    }

}


*/


/*

async function criarrr(){

    try {
        const form = document.querySelector("form");
        const data = new FormData(form);
        console.log(data);
        console.log(form);
        console.log("Conexao estavel");
        alert("Alerta");
        const user = await axios.post('http://localhost:5000/register', data);
        if (user.status === 200) {
            alert("AAAAAAAAEEEEEEEEEEEEEE");
        }else{
            alert("Naoooooooooooooo");
        }
    } catch (error){
        console.error(error);

    }
}
*/
const dadosFormulario = () => {
    
    let dados = {    
        /*nome: document.getElementById('nome').value,
        cargoPretendido: document.getElementById('cargoPretendido').value,
        profissao: document.getElementById('profissao').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        genero: document.getElementById('genero').value,
        cepCandidato: document.getElementById('cepCandidato').value,
        logradouro: document.getElementById('logradouro').value,
        numero: document.getElementById('numero').value,
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
        numero: 332,
        bairro: "Centro",
        cidade: "Baleneário Camboriú",
        uf: "SC",
        telefone: 33233454,
        celular: 45983398344,
        contato: 45983398344,
        email: "pedro8@gmail.com",
        identidade: "29888987",
        cpfCandidato: 239332876745,
        possuiVeiculo: "Sim",
        habilitacao: "AB" 
        
    };

    console.log(dados);
    return dados


}

const cadastrarCandidato = async(candidato) => {

    try {
        const user = fetch('http://localhost:5000/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosFormulario())
        });
        if (user.status === 200) {
            alert("Deu certo ae");
        }

    }catch (error) {
            alert("Deu errrrrrrrrrrrrado");
            console.log(dadosFormulario());
        }

}