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



// Место для первой задачи
function sayHello(name) {
    return name

}

sayHello('Антон')

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num +1]
}

returnNeighboringNumbers(5)


// Место для третьей задачи
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);