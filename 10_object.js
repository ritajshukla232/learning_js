// object litrals
const mysym = Symbol("key");

 const Juser ={
    name:"ritaj",
    "fullName": "ritaj shukla",
    [mysym]: "key",
    age: 18,
    location: "kanpur",
    loggedIn: false,
    lastLoggedIn:("sunday", "tuesday")

 }

 Juser.age =19;
 Object.freeze(Juser); // after this we can not change in object
Juser.age= 30;
console.log(Juser.location)
 console.log(Juser.name)
 console.log(Juser["location"])
 console.log(Juser["fullName"])
 console.log(Juser[mysym])
 console.log(typeof mysym)
 console.log(Juser.age)
 console.log(Juser)