function convert(value){
    value = value.toUpperCase()
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

function arabicToRoman(arabicValue) {
    let converted = '';
    for (let i of Object.keys(romanBase)) {
        let num = Math.floor(arabicValue / romanBase[i]);
        arabicValue -= num * romanBase[i];
        converted += i.repeat(num);
    }
    return converted;
}

function romanToArabic(romanValue) {

    let value = Object.keys(romanBase).reduce((num, key) => {
        while (romanValue.indexOf(key) === 0) {
            num += romanBase[key];
            romanValue = romanValue.substr(key.length);
        }
        return num;
    }, 0);
   return value
}
if(!isNaN(value)){
    if(value >= 1 && value <= 3999){
        return arabicToRoman(value)
    } else {
        return 'The value is out of range (Only accepted between 1-3999)'
    }
}else if (!(!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/gm.test(value))){
    return romanToArabic(value)
} else {
    return 'The value is not a valid Integer or Roman Numeral'
} 
}