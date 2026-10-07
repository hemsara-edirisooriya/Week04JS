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

const leterList = ["G","H","I","A","C","R"];
console.log(leterList);

const sortArray = leterList.sort();
console.log(sortArray);


const studentList = [
    {name:"smantha", age:20, gender:"male"},
    {name:"cmantha", age:20, gender:"male"},
    {name:"tmantha", age:20, gender:"male"},
    {name:"bmantha", age:20, gender:"male"},
    {name:"kmantha", age:20, gender:"male"},
]

let tempFind = studentList.find(x => x.name == "smantha");
console.log(tempFind);


fetch("/customer.json").then(res => res.json()).then(data =>{
    console.log(data);

    
});
