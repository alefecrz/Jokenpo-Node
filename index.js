const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Olá tudo bem?', resposta => {
    console.log(`Sua resposta: ${resposta}`)

    rl.close()
})