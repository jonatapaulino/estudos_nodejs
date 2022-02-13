const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de idade e tem habilitação para saber se você pode entrar tarde');
console.log('Além das suas verificações, precisamos verificar se você estã na lista de presença do horário');

readline.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2004){
        console.log('Você não tem 18 anos.');
    }else{
        readline.question('Voê tem habilitação? (Sim/Nao)', temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() == 'SIM')){
                console.log('Você não tem habilitação para entrar no kart.');
            }else{
                readline.question("Qual o seu nome? ", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao kart Douglas');
                            break;
                        case 'Jonata' :
                            console.log('Bem vindo ao kart Jonata');
                            break;
                        default :
                            console.log('Seu nome não está na lsita');
                    }
                });
            }
        });
    }
});