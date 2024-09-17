const value = 10

if ( value < 5)
{
    console.log( "value  is  less than"  )
}
 else if( value > 5)
   {
   console.log (` value  is  greater than `)
}
 else if( value == 10)
     {
console.log (` value  is equal to `)
}
else
 {
    console.log( "code is executed")
}
// through a example
const userLoggedIn = true
const debitCard = true

if ( userLoggedIn && debitCard == 1){
    console.log(`you can purchase any items`)
}
const userEmail = true
const userGoogleId = false

if ( userEmail || userGoogleId == 1){
    console.log(` you can access it by use any one id`)
}
// switch statement

let month = 1

switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("defalt case executed")
        break;
}