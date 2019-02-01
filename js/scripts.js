//Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.//

//Allow the user to choose toppings and size for the pizza they'd like to order.
//Create a pizza object constructor with properties for toppings and size.
//Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.//

//bussines logic//

function Pizza(size, topping) {
  this.size =  size;
  this.toppings = toppings;

}

Pizza.prototype.sizePrice = function() {
  if (this.size === "large"){
    return 12;
  } else if (this.size = "medium"){
    return 10;
  } else if (this.size = "small"){
    return 8;
  } else {
    return this.zise = 0;
  }
}

Pizza.prototype.pizzaPrice = function() {
  var sizePrice = this.sizePrice(this.size);
  var totalPrice = sizePrice + (this.toppings * 2.50);
  return totalPrice;
  }

  //UI//

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var size = $("#pizza-size").val();
    var topping = $("input:radio[name=topping]:checked").val();

    $("total").text(size);
    $("#total").show();
  })
})
