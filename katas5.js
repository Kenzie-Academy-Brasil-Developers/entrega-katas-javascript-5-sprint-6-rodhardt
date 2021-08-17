
function testReverseString1() {
    let result = reverseString("Kenzie Academy")
    let expected = "ymedacA eizneK"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseString2() {
    let result = reverseString("1212teste1")
    let expected = "1etset2121"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseString(text) {
    return text.split("").reverse().join("")
}

testReverseString1()
testReverseString2()


function testReverseSentence1() {
    let result = reverseSentence("bob likes dogs")
    let expected = "dogs likes bob"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentence2() {
    let result = reverseSentence("12 strings invertidas")
    let expected = "invertidas strings 12"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseSentence(text) {
    return text.split(" ").reverse().join(" ")
}

testReverseSentence1()
testReverseSentence2()


function testMinimumValue1() {
    let result = minimumValue([5, 4, 2, 1])
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2() {
    let result = minimumValue([-5, 4, -2, 1])
    let expected = -5
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function minimumValue(array) {
    let result = array[0]
    array.forEach((element) => {
        if (element < result) {
            result = element
        }
    })
    return result
}

testMinimumValue1()
testMinimumValue2()


function testMaximumValue1() {
    let result = maximumValue([5, 4, -2, 1])
    let expected = 5
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2() {
    let result = maximumValue([-5, -4, -2, -1])
    let expected = -1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function maximumValue(array) {
    let result = array[0]
    array.forEach((element) => {
        if (element > result) {
            result = element
        }
    })
    return result
}

testMaximumValue1()
testMaximumValue2()


function testCalculateRemainder1() {
    let result = calculateRemainder(8, 3)
    let expected = 2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2() {
    let result = calculateRemainder(-3, 2)
    let expected = -1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function calculateRemainder(number, divisor) {
    return number % divisor
}

testCalculateRemainder1()
testCalculateRemainder2()


function testDistinctValues1() {
    let result = distinctValues([4, 3, 4, 2, 2, 3, 7, 8, 8, 8])
    let expected = [4, 3, 2, 7, 8]

    let isEqual = true
    if (result.length !== expected.length) {
        isEqual = false
    }
    for (let i = 0; (i < expected.length) && (isEqual); i++) {
        if (expected[i] !== result[i]) {
            isEqual = false
        }
    }

    console.assert(isEqual, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2() {
    let result = distinctValues([-1, 1, 2, -2, 3, 3, 3, 8, -8, 8])
    let expected = [-1, 1, 2, -2, 3, 8, -8]

    let isEqual = true
    if (result.length !== expected.length) {
        isEqual = false
    }
    for (let i = 0; (i < expected.length) && (isEqual); i++) {
        if (expected[i] !== result[i]) {
            isEqual = false
        }
    }

    console.assert(isEqual, `esperado: ${expected}, obtido: ${result}`)
}

function distinctValues(array) {
    let result = []
    array.forEach((element) => {
        if (result.includes(element) === false) {
            result.push(element)
        }
    })
    return result
}

testDistinctValues1()
testDistinctValues2()


function testCountValues1() {
    let result = countValues([4, 3, 4, 2, 3, 7, 8, 8, 8])
    let expected = [[4, 2], [3, 2], [2, 1], [7, 1], [8, 3]]

    let isEqual = true
    if (result.length !== expected.length) {
        isEqual = false
    }
    for (let i = 0; (i < expected.length) && (isEqual); i++) {
        if (expected[i][0] !== result[i][0] || expected[i][1] !== result[i][1]) {
            isEqual = false
        }
    }

    console.assert(isEqual, `esperado: ${expected}, obtido: ${result}`)
}

function testCountValues2() {
    let result = countValues([-1, 1, 2, -2, 3, 3, 3, 8, -8, 8])
    let expected = [[-1, 1], [1, 1], [2, 1], [-2, 1], [3, 3], [8, 2], [-8, 1]]

    let isEqual = true
    if (result.length !== expected.length) {
        isEqual = false
    }
    for (let i = 0; (i < expected.length) && (isEqual); i++) {
        if (expected[i][0] !== result[i][0] || expected[i][1] !== result[i][1]) {
            isEqual = false
        }
    }

    console.assert(isEqual, `esperado: ${expected}, obtido: ${result}`)
}

function countValues(array) {

    let values = distinctValues(array)
    let result = []

    values.forEach((element) => {
        let numberToCount = element
        let elementOnly = array.filter(number => numberToCount === number)
        result.push([element, elementOnly.length])
    })

    return result
}

testCountValues1()
testCountValues2()


function testEvaluateExpression1() {

    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testEvaluateExpression2() {

    let result = evaluateExpression("- a + b + c - d - e", {a: 3, b: -3, c: -15, d: -15, e: 5});
    let expected = -11
    
    
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function evaluateExpression(expression, object) {

    let expressionArray = expression.split(" ").join("").split("")
    let valuesWithSignal = []
   
    if (expressionArray[0] !== "-") {
        valuesWithSignal.push(object[expressionArray[0]])
    }

    for (let i = 0; i < expressionArray.length; i++) {
        if (expressionArray[i] === "-") {
            valuesWithSignal.push(-object[expressionArray[i+1]])
        }
        if (expressionArray[i] === "+") {
            valuesWithSignal.push(object[expressionArray[i+1]])
        }
    }

    return valuesWithSignal.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)
}

testEvaluateExpression1()
testEvaluateExpression2()