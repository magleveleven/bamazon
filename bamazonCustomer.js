var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "1Theologian$",
    database: "bamazon_db"
})

connection.connect(function(err) {
    console.log("Connected as id: "+connection.threadId);
    start();
})

var start = function(){
    inquirer.prompt({
        name: "viewOrBuy",
        type: "rawlist",
        message: "Would you like to VIEW inventory or BUY product?",
        choices: ["VIEW", "BUY"]
    }).then(function(answer){
        if(answer.viewOrBuy.toUpperCase()=="VIEW"){
            //showInventory();
        }
        else {
            //buyProduct();
        }
    })
}

var showInventory = function() {

}

var buyProduct = function() {
    
}