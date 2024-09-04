const accountid = 121
let email = "ritaj"
var accpassword = "202020"
city = "kanpur"
let state;

// change in const are not allowed

console.log(accountid);
email= "ritaj shukla"
accpassword = "404040"
city = "akbarpur"

/* 
prefer not use of var .... it is globel scope variable
because of issu in block scope and functinol scope
*/


console.table([accountid, email, accpassword, city, state])