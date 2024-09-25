function user(username, logCount, loggedIn){
    this.username = username;
    this.logCount = logCount;
   this.loggedIn =loggedIn
//    return this
    
}

const userone = new user("ritaj", 10 , true)
const usertwo = new user("rajat", 12 , false)
console.log(userone);
console.log(usertwo);
