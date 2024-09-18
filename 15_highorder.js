//EXAMPLE OF HOW FILTER METHOD WORKS  
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = nums.filter((number1) => number1 > 4);
console.log(newNums);


//EXAMPLE OF HOW MAP METHOD WORKS  
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const newNums2 = num2
    .map((number2) => number2 + 10)
    .map((number2) => number2 * 2)
console.log(newNums2);

//EXAMPLE OF HOW reduce METHOD WORKS  
const num3 = [1, 2, 3, 4,]
const newNum3 = num3.reduce((acc, cur) => acc + cur, 0)
// const newNum4 = num3.reduce((acc, cur) => acc + cur, 1)
// const newNum5 = num3.reduce((acc, cur) => acc + cur, 2)
// const newNum6 = num3.reduce((acc, cur) => acc + cur, 3)
// const newNum7 = num3.reduce((acc, cur) => acc + cur, 4)
console.log(newNum3)
// console.log(newNum4)
// console.log(newNum5)
// console.log(newNum6)
// console.log(newNum7)

 //SHOPPING CART

const ShoppingCart = [
    {
        courseName : "js course",
        fees : 300,

    },
    {
        courseName : "java course",
        fees : 500,

    },
    {
        courseName : "html course",
        fees : 200,

    }
]

const Carttotal = ShoppingCart.reduce ( (acc, item) => acc + item.fees, 0)
console.log(Carttotal)