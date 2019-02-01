//Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.//

//Allow the user to choose toppings and size for the pizza they'd like to order.
//Create a pizza object constructor with properties for toppings and size.
//Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.//

//bussines logic//

function Pizza(size, toppings) {
  this.size =  size;
  this.toppings = []; //array of numbers//
}

Pizza.prototype.pizzaPrize = function() {
  return this.size + this.toppings;
}
var testPizza = new Pizza(100, 25);

testPizza.pizzaPrize();




// let order = new Pizza("medium", ["salami", "cheese"]);


//UI logic//
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#pizzaSize").val();
    var selectedToppings = $("#toppings").val();
    var newPizza = new Pizza (selectedSize , selectedToppings)
    Pizza.pizzaPrize(newPizza);

    $("#newPizza").show();
  })
})
