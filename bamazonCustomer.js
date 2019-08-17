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
            showInventory();
        }
        else {
            buyProduct();
        }
    })
}

var showInventory = function() {
    connection.query("SELECT * FROM products",  function(err,rows){
        if(err) {
            console.log(err);
            return;}
        //console.log(res);
        rows.forEach(function(res) {
            console.log(res.id, res.product_name, res.department_name, res.price, res.quantity)})
            inquirer.prompt({
                name: "enterIDtoBuy",
                type: "input",
                message: "Enter the ID of the product you would like to purchase.",
                validate: function(value){
                    if(isNaN(value)==false){
                        return true;
                    }
                    else {
                        return false;
                    }}
            }).then(function(answer){
                console.log(answer);
                inquirer.prompt({
                    name: "enterQuantity",
                    type: "input",
                    message: "And how many you would like to purchase?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                })
            })
        })
}

var buyProduct = function() {
    connection.query("SELECT * FROM products",  function(err,rows){
        if(err) {
            console.log(err);
            return;}
        //rows.forEach(function(res) {
            //console.log(res.id, res.product_name, res.department_name, res.price, res.quantity);
            inquirer.prompt({
                name: "enterIDtoBuy",
                type: "input",
                message: "Enter the ID of the product you would like to purchase.",
                validate: function(value){
                    if(isNaN(value)==false){
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            })
            .then(function(answer){
            console.log(answer);
            inquirer.prompt({
                name: "enterQuantity",
                type: "input",
                message: "And how many you would like to purchase?",
                validate: function(value){
                    if(isNaN(value)==false){
                        return true;
                    }
                    else {
                        return false;
                    }}
                })
            })
        })
}
