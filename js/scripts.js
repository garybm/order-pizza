//Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.//

//Allow the user to choose toppings and size for the pizza they'd like to order.
//Create a pizza object constructor with properties for toppings and size.
//Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.//

//bussines logic//


function Pizza(size,topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.size === "large"){
    this.cost = 12 + this.topping;
  } else if (this.size === "medium"){
    this.cost = 10 + this.topping;
  } else if (this.size === "small"){
    this.cost = 8 + this.topping;
  } else { alert("error");
  }
}

//UI logic//

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var size = $("#pizza-size").val();
    var topping = 0; $("input:checkbox:checked").each(function(){ topping++;
    });

    var newPizza = new Pizza(size, topping); newPizza.pizzaPrice();

    $("#total").text(newPizza.cost);
    $(".output").show();
  })
})
