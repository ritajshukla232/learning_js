// singleton objects
// const tinderUser = new Object();
// part_1


const tinderUser ={}

tinderUser.id = "123abc";
tinderUser.name = "vaibhav";
tinderUser.logIn = false;
console.log(tinderUser)



//object inside object   .. part_2
 
const detail ={
    email :"ritaj@student.com",
    fullname:{
        username:{
            firstname:"ritaj",
            lastName:"shukla"
        }
    }
 }
     console.log( detail.fullname.username.lastName);
     console.log(detail)


// merge 2 objects    ...part_3

let obj1= { 1:"a", 2:"b", 3:"c"}
let obj2= { 4:"d", 5:"e", 6:"f"}

let obj3 = Object.assign( {}, obj1, obj2);
//let obj = {...obj1,...obj2)}; //simple method
console.log(obj3);
