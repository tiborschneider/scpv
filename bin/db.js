var mysql = require("mysql");

var dbUsername = "application";
var dbPassword = "y7F!z6C7U#EKWsI8";
var dbName = "application";
var tabUsersName = "users";

var dbConnection = mysql.createConnection({
    host: "localhost",
    user: dbUsername,
    password: dbPassword
})

dbConnection.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
    dbConnection.query("USE " + dbName + ";", function(err, result) {

    })
});

function login(userId) {
    console.log("Login on Database with user: " + userId);
    var post = {spotify_id: userId};
    var query1 = dbConnection.query("SELECT * FROM " + tabUsersName + " WHERE ?", post, function(err, result, fields) {
        if (result.length == 0) {
            console.log("create new");
            var query2 = dbConnection.query('INSERT INTO ' + tabUsersName + ' SET ?', post, function (err, result) {

            });
        } else {
            console.log("user found");
        }
    })
}

