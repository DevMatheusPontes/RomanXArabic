/**
 * FUNÇÃO PARA IDENTIFICAR E CONVERTER O NÚMERO
 */
function convert(value){
    value = value.toUpperCase() // TRANSFORMO TODO O VALOR RECEBIDO EM MAIÚSCULO

    /**
     * DETERMINO UM OBJETO COM OS VALORES E O ANTECESSOR PARA FACILITAR NA HORA DE IDENTIFICAR O CICLO
     * DE REPETIÇÃO (NÃO DEIXANDO PASSAR DE 3)
     */
    const romanBase = { 
        M: 1000, 
        CM: 900,
        D: 500, 
        CD: 400, 
        C: 100, 
        XC: 90, 
        L: 50, 
        XL: 40, 
        X: 10, 
        IX: 9, 
        V: 5, 
        IV: 4, 
        I: 1 };

        /** 
         * FUNÇÃO PARA CONVERTER DE ARÁBICO PARA ROMANO
         */
function arabicToRoman(arabicValue) {
    let converted = ''; // DETERMINO UMA VARIAVEL PARA O RETORNO
    for (let i of Object.keys(romanBase)) { // FAÇO LAÇO PARA PEGAR A POSIÇÃO DAS LETRAS REPRESENTANTES (NAS CHAVES) E BASEAR O CALCULO
        let num = Math.floor(arabicValue / romanBase[i]); // DIVIDO O VALOR RECEBIDO DA FUNÇÃO COM O VALOR DA CHAVE E ARREDONDO
        arabicValue -= num * romanBase[i]; // SUBTRAIO DO VALOR RECEBIDO NA FUNÇÃO O RESULTADO DA DIVISÃO VEZES O VALOR DA CHAVE
        converted += i.repeat(num); // GUARDO A CHAVE NA VARIAVEL CONVERTED E REPITO O PROCESSO
    }
    return converted; // RETORNO O CONTEÚDO QUE FICOU DO CALCULO
}

/**
 * FUNÇÃO PARA CONVERTER DE ROMANO PARA ARABICO
 */
function romanToArabic(romanValue) {

    let value = Object.keys(romanBase).reduce((num, key) => {  // PERCORRO AS CHAVES 
        while (romanValue.indexOf(key) === 0) { // CRIO UM LAÇO ATÉ FINALIZAR AS CHAVES
            num += romanBase[key]; // INCREMENTO O VALOR DAQUELA CHAVE
            romanValue = romanValue.substr(key.length); // REMOVO O CARACTER DA STRING RECEBIDA
        }
        return num; // retorno o valor incrementado para o value
    }, 0);
   return value // RETORNO PARA AFUNÇÃO O VALOR DA VARIAVEL VALUE
}
if(!isNaN(value)){ // VERIFICO SE É UM NUMERO OU NÃO
    if(value >= 1 && value <= 3999){ // SE FOR NÚMERO CONDICIONO PARA ESTAR ENTRE 1 E 3999
        return arabicToRoman(value) // RETORNO O VALOR RECEBIDO PELA FUNÇÃO PARA A FUNÇÃO PRINCIPAL (convert)
    } else {
        return 'The value is out of range (Only accepted between 1-3999)' // CASO NÃO ESTEJA DENTRO DO VALOR PRÉ DEFINIDO (ENTRE 1 E 3999)
    }                                                                     // RETORNA ESSA MENSAGEM DE ERRO  
}else if (!(!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/gm.test(value))){ // CASO NÃO SEJA UM NÚMERO VERIFICA SE ESTÁ DENTRO DOS PADRÕES DO NUMERAL ROMANO
    return romanToArabic(value) // SE ESTIVER ELE FAZ A CONVERSÃO USANDO A FUNÇÃO E RETORNA PARA A FUNÇÃO PRINCIPAL (convert)
} else {
    return 'The value is not a valid Integer or Roman Numeral' // CASO CONTRARIO, ELE VAI RETORNAR QUE NÃO É UM VALOR INTEIRO OU NÃO É UM VALOR EM ALGARISMO ROMANO
} 
}