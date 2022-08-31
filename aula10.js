/*exibirAsteriscos(10);

function exibirAsteriscos(linhas){
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}*/


/*function criarCelular (marcaCelular, tamanhoCelular, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoCelular,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}
 const celular1 = criarCelular('Smartphone', 5.5, 5000);
 console.log(celular1);*/



 /*function criarControle (marcaControle, tamanhoControle, capacidadeBateria){
    return {
        marcaControle,
        tamanhoControle,
        capacidadeBateria,
        ligar(){
            console.log("Ligar controle...")
        }
    }
}
 const controle = criarControle('LG', 7.5, 1500);
 console.log(controle);*/



 /*function Controle (marcaControle, tamanhoControle, capacidadeBateria){
        this.marcaControle = marcaControle,
        this.tamanhoControle = tamanhoControle,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function() {
            console.log("Ligar controle...")

        }
       
}
    const controle = new Controle('LG', 7.5, 1500);
    console.log(controle);*/


    const celular = {
        marcaCelular: 'asus',
        tamanhoTela: {
            vertical: 155,
            horizontal: 75
        },
        ligar: function () {
            console.log("fazendo ligação...");
        }
    }

    const novoObjeto = Object.assign({
        bateria: 5000
    }, celular);
    console.log(novoObjeto);

    const objeto2 = {...celular};
    console.log(objeto2);
