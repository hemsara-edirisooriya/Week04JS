// - 1 Method
function addNumber(num1,num2){
    return num1 + num2;
}

console.log(addNumber(10,10));

// - 2 Method
let getSum = function(num1, num2){
    return num1 + num2;
}
console.log(getSum(10,10));

// - 3 Method
let getTotal = (num1, num2) =>{
    return num1 + num2;
}

console.log(getTotal(10,10));

// - 4 Method
(num1, num2) => {
    return num1 + num2;
}