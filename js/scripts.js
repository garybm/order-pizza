//Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.//

//Allow the user to choose toppings and size for the pizza they'd like to order.
//Create a pizza object constructor with properties for toppings and size.
//Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.//

//bussines logic//

function Pizza(size, toppings) {
  this.size =  size;
  this.toppings = toppings;
}
var testPizza = new Pizza(100, 25);

Pizza.prototype.newPizza = function() {
  return this.size + this.toppings;
}
var testPizza = new Pizza(100, 25);

Pizza.prototype.pizzaPrize = function() {
  if (this.size === "large"){
    this.pizzaPrice = 12;
  } else if (this.size = "medium"){
    this.pizzaPrice = 10;
  } else if (this.size = "small"){
    this.pizzaPrice = 8;
  } else {
     this.pizzaPrice = 0;
  }
}


var testPizza = new Pizza(100, 25);

testPizza.pizzaPrize();


let order = new Pizza("medium", ["salami", "cheese"]);


UI logic//
var newPizzza = new Pizza();

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var size = $("#pizza-size").val();
    var toppings = $("#toppings").val();
    var newPizza = new Pizza (size, toppings);
    pizzaPrize.pizza
    $(".totalPrice").text(newPizza);
    $("#total").show();
  })
})
