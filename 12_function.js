// Funtion to add two number 

function addTwoNum(num1,num2){
    // console.log(num1+num2);
    const num3 = num1*num2
    console.log(`multiplication of num1 and num2 is ${num3}`)
    return num3
}

const num3 =addTwoNum(4,6)
console.log(num3)

function LoggedIn (username){
    if(!username)
    {
        console.log("please enter a valid name ")
    }
console.log(`${username} just logged in`)
}

LoggedIn("ritajshukla")
// LoggedIn()