const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual sua escolha Pedra, Papel ou Tesoura?\n', resposta => {
    if(resposta === 'Tesoura')
        console.log('Você escolheu ' + resposta)
    else if(resposta === 'Pedra')
        console.log('Você escolheu ' + resposta)
    else if(resposta === 'Papel')
        console.log('Você escolheu ' + resposta)
    else
        console.log('Sua resposta foi: ( ' + resposta +  ' ) .Resposta inváida tente Pedra, Papel ou Tesoura.')

    rl.close()
})