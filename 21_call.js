function setUserName (username){
    this.username = username;
    console.log("called");
    
}
function user(username, email, password){
    setUserName.call(this,username);
    this.email = email;
    this.password = password;

}
const show = new user("ritaj", "@.com" , 433 )
console.log(show);
