let whoAreYou = 'Beginner';
const discount = 0.9

function praiseMe(text) {
    console.log(text)
}

praiseMe('Кто молодец? Ты молодец!')
console.log(whoAreYou)

function calc(a, b) {
    return(a + b)
}

console.log(calc(4, 3))
console.log(calc(5, 7))

const usdCurr = 28
const eurCurr = 32

function convert(amount, curr) {
return curr * amount
}

function promotion (result) {
    console.log(result * discount)
}
convert(500, eurCurr)
const res = convert(500, usdCurr)
promotion(res)
