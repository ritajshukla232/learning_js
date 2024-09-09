const myArr=[1,2,3,4,5,6]
console.log(myArr[3]);
console.log(typeof myArr) // return object

const myArr2 = new Array(7,8,9,"hello")
 console.log(myArr2[2])

//ARRAY methods


myArr.push("last") // add element in last
myArr.unshift("first") // add element in start
const change = myArr.toString(); // convert array to string
console.log(typeof change) // show the type of change name variable
myArr.pop() // remove last element
myArr.shift() // remove first elememt
console.log(myArr.includes(9)); // check value are present or not in array and return boolean datatype
console.log(myArr.indexOf(5)); // it return no of index where given value exist
console.log(myArr)

//slice and splice
console.log("a", myArr)
const myNewAr1 = myArr.slice(1,3); // return peace of array 
console.log(myNewAr1)
console.log("b", myArr)

//splice
const myNewAr2 = myArr.splice(1,3,99); //change orignal array . syntax:-(strtindx,delcount,addnew_element)
console.log(myNewAr2)
console.log("c", myArr)


