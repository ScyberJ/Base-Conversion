

function decimalToAnyBase () {
    let baseNotation = []
    let spareNum = ['A','B','C','D','E','F']
    let decimalNum = document.querySelector('#fromDecimal').value
    let baseNum = document.querySelector('#toBase').value
    if(decimalNum/baseNum < 1){
        if(decimalNum%baseNum > 9){
            baseNotation.unshift(spareNum[decimalNum%baseNum - 10])
            decimalNum = Math.floor(decimalNum/baseNum) 
        }
        else{
            baseNotation.unshift(decimalNum%baseNum)
            decimalNum = Math.floor(decimalNum/baseNum) 
        }

        baseNotation.unshift(decimalNum%baseNum)
        }
    else{
        while(decimalNum/baseNum >= 1){
            if(decimalNum%baseNum > 9){
                baseNotation.unshift(spareNum[decimalNum%baseNum - 10])
                decimalNum = Math.floor(decimalNum/baseNum) 
            }
            else{
                baseNotation.unshift(decimalNum%baseNum)
                decimalNum = Math.floor(decimalNum/baseNum) 
            }
            if(decimalNum/baseNum < 1){
            baseNotation.unshift(decimalNum%baseNum)
            }
        }
    }
    
    document.querySelector('.result1').innerHTML = baseNotation.join('')
}

function fromBaseToDecimal (){
    let base = document.querySelector('#base').value
    let baseNum = document.querySelector('#fromBase').value
    document.querySelector('.result2').innerHTML = parseInt(baseNum, base)
}