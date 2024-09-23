// type of promise creation to hold the promise in variable

let promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log(" first promise executed");
        resolve("resolve ho gya 1")
    }, 2000);
})

promise1.then(function(){
    console.log(" first promises executed sucessfully");
    
});

// second type of promise creation without holding the promise in variable

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log(" second promise executed");
        resolve("resolve ho gya 2")
    }, 5000);
}).then(
    function(){
        console.log("second promise executed successfully")
    }
)

// third way to take parameter in resolve method
let promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log(" third promise executed");
        resolve({username:"ritaj", email:"shukla@email"})// can pass object , data, array as parameter in promise
    }, 6000);
})

promise3.then(function(user){
    console.log(user);
    
});

// create then , catch & finally block

let promise4 = new Promise((resolve, reject) => {
      let err = false; // if this value is  true than else block will be executed  and  throw an error
      if ( err != true){
      resolve( { username:"ritaj", password:"321"})
      }
      else{
        reject(" ERROR : some thing went wrong")
      }
}
)

promise4
.then( (user) => {
    return user.username
})
.then((username) => console.log(username))
.catch(function(err){
    console.log(err)
})
.finally( () => console.log(" promise are being completed it should be resolve or rejected"))
