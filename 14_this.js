 // use of this keyword
 const user ={
     username : "ritaj",
     price:99,

     welcomeMassege : function(){
        console.log(`${this.username},welcome to this website`)
        // console.log(this)  
     }
 }
 
 user.welcomeMassege()
 user.username =" carry";
 user.welcomeMassege()

 //Arrow function

const addTwo = (num1, num2) => {
    return num1+ num2;

 } // this is explicite method where we use return keyword to get return


// use case of implicit method
// first type of implicit method
 const mulTwo = (num1, num2) => num1*num2;
// second type of implicit method
 const subTwo = (num1 , num2) => (num1 - num2); // this one is most helpul when we want to use implicit method  in object;

 console.log( addTwo(8,2))
 console.log( mulTwo(3,3))
 console.log( subTwo(9,4))