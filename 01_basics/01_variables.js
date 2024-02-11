const accountId = 144553
let accountEmail = "jatin@google.com"
var accountPassword = "12345"
accountCity = "Indore"

// accountId = 5 not allowed

accountEmail = "jp@jp.com"
accountPassword = "555"
accountCity = "Bengaluru"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])