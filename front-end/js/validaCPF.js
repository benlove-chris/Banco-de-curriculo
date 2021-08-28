console.log("Carregado");
function cpfvalida(cpf){
    if (cpf.length != 11){
        return false
    }
    
    
    else{
        var numeros =cpf.substring(0,9);
        var digitos = cpf.substring(9);

        //console.log(numeros);
        //console.log(digitos);
        var soma = 0 
        for (var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;
        }
        //console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);


        // validacao do primeiro digitos
        if (resultado != digitos.charAt(0)){
        return false;
        }



        soma = 0;

        numeros = cpf.substring(0,10);
        for (var k = 11; k>1; k--){
            soma += numeros.charAt(11- k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma %11);
        
        //Validacao do segundo digitos
        if (resultado != digitos.charAt(1)){
            return false;
        }


        //console.log(digitos.toString().charAt(0) + "é a primeira posição da variavel soma")
        return true;

    }

}




function validarCPF(){
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    

    var cpf = document.getElementById("cpfCandidato").value;
    console.log(cpf);

    var resultadoVal = cpfvalida(cpf);

    if (resultadoVal){
        document.getElementById('success').style.display = 'block';


    }

    else{
        document.getElementById('error').style.display = 'block';

    }

}


