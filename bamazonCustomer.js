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
 })

var start = function(){
connection.query("SELECT * FROM products", function(err, res){
    console.table(res);
    buyProduct();
});

var end = function (){
    console.log("Goodbye!")
    connection.end();
}

var buyProduct = function() {
            inquirer.prompt([
                {
                    name: "id",
                    type: "input",
                    message: "Enter the ID # of the product you'd  like to purchase.",
                    validate: function (value) {
                        if(isNaN(value) === false){
                            return true;
                        }
                        else {
                            return false;
                 
                        }
                }
                },
                {
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
            }
        ]).then(function(answer){

            connection.query("SELECT quantity FROM products WHERE ? ", [
                {
                    id: answer.id
                }
            ], function(err,res) { //Need to fix the quantity updater , it's not working
                var currentInventory = res[0].quantity;
                if(currentInventory < answer.quantity) {
                    console.log("Unfortunately, we don't have that amount available.");
                    end();
                }
                else {
                    connection.query("UPDATE products SET ? WHERE ?", [
                        {
                            quantity: currentInventory - answer.quantity,
                        }, {
                            product_name: answer.product_name
                        }
                    ],
                    function (err, res){
                        inquirer.prompt({
                            type: "list",
                            message: "Do you want to BUY more or EXIT?",
                            choices: ["BUY", "EXIT"],
                            name: "keepGoing"
                        }).then(function(answer) {
                            switch(answer.keepGoing) {
                                case "BUY":
                                    start();
                                    break;
                                case "EXIT":
                                    end();
                                }
                            })
                        }
                        )
                    }
                }
                )
            })
        }}

start();
