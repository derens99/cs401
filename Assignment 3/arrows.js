
// Add 1 using arrow functions. I gave it a name using the let syntax;
let addOneArrow = (value) => value+1;

let returnPairArrow  = (evenVal) => {
    return {evenVal: evenVal, oddVal: evenVal+1};
}

let sumArrow = (a, b) => {
    return a + b;
}

let doubleArrow = (val) =>{
    return val * val;
}

//  Test Cases for each arrow function
console.log(addOneArrow(5));
console.log(returnPairArrow(4));
console.log(sumArrow(5, 6));
console.log(doubleArrow(5));