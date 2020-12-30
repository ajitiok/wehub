//format String no Rek. Bank
let s1 = '01-44 48 5755 8368';
let s2 = '0 - 22 1485--351';
let s3 = '555672653'



function removeSpaceAndStrip(str){
    let hasil = ''
    for ( let i = 0 ; i < str.length ; i++){
        if ( str[i] === ' ' || str[i] === '-'){
            hasil += ''
        }else{
            hasil += str[i]
        }
    }
    return hasil
}



// console.log(removeSpaceAndStrip(s1));//01444857558368
// console.log(removeSpaceAndStrip(s2));//0221485351  
// console.log(removeSpaceAndStrip(s3));//555672653


function cekLength(str){
    let arr = []
    for ( let i = 0 ; i < str.length ; i += 3){
        arr.push(str.substr(i , 3))
    } 
    let lastDigit = arr[arr.length - 1]
    if ( lastDigit.length !== 1 ) return arr.join('-')
    else {
        let newStr = str.substr(0, (str.length - 4))
        let sisa = str.substr(-4)
        let temp1 = [];
        let temp2 = []
        for ( let i = 0 ; i < newStr.length ; i += 3){
            temp1.push(newStr.substr(i,3))
        }

        for ( let i = 0 ; i < sisa.length ; i += 2){
            temp2.push(sisa.substr(i,2))
            temp2.join('-')
        }
        return `${temp1.join('-')}-${temp2.join('-')}`
    }
}



function format(str){
    let hasil = removeSpaceAndStrip(str)
    return cekLength(hasil)
}

console.log(format(s1));
console.log(format(s2));
console.log(format(s3));
