const newPassword = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9]

//algoritmo Fisher-Yates Shuffle
function shuffle(array) {
    for (let i = array.length - 1 ; i > 0 ; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
        
    }

        //slice, obtem apenas uma parte específica do array
        //vai obter do 0 até o 10 (1 até o 11)
    const slicedArray = array.slice(0,10).join('')
        //join() concatena os elementos do array em uma única string separados pelo que eu escolher como parâmetro.
        //coloquei '' para que ele junte tudo e me dê como uma senha pré pronta de 10 dígitos

    return slicedArray
}

function createPassword(){
    for(i = 0; i <= 9; i++){
        console.log(shuffle(newPassword))
    }
}

createPassword()