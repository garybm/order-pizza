//Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.//

//Allow the user to choose toppings and size for the pizza they'd like to order.
//Create a pizza object constructor with properties for toppings and size.
//Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.//

//bussines logic//

function Pizza(size, topping) {
  this.size =  size;
  this.topping = topping;
  this.price=0;
}

Pizza.prototype.pizzaSize = function() {
  if (this.size === "large"){
    this.size = 12;
  } else if (this.size = "medium"){
    this.size = 10;
  } else if (this.size = "small"){
    this.size = 8;
  } else {
     this.pizzaPrice = 0;
  }
}

Pizza.prototype.toppings = function() {
  if (this.topping === "pepperoni"){
  this.topping = 5;
  } else if(this.topping === "olives") {
    this.topping = 5;
  } else if (this.topping === "peppers"){
    this.topping = 5;
  } else {
    this.topping = 0;
    }
  }
  Pizza.prototype.totalPrice = function() {
    return this.size += this.topping;
  }

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
