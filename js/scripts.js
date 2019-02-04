//Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.//

//Allow the user to choose toppings and size for the pizza they'd like to order.
//Create a pizza object constructor with properties for toppings and size.
//Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.//

//bussines logic//

function Pizza(size, topping) {
  this.size =  size;
  this.topping = topping;
}

let garyPizza = new Pizza('large','pepperoni');
console.log(garyPizza)

function newPizza () {
  return(size + topping);
}
console.log(newPizza);


Pizza.prototype.sizePrice = function() {
  var small = 8;
  var medium = 10;
  var large = 12;
  if (this.size === "large"){
    return large;
  } else if (this.size = "medium"){
    return medium;
  } else if (this.size = "small"){
    return small;
  } else {
    return this.zise = 0;
  }
}



// Pizza.prototype.pizzaPrice = function() {
//   var sizePrice =();
//   var totalPrice = sizePrice + (this.toppings * 2.50);
//   return totalPrice;
//   }

  //UI//

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var small = 8;
    var medium = 10;
    var large = 12;
    var toppings = 2;
    var size = parseInt($("#pizza-size").val());
    var topping = parseInt($("input:radio[name=topping]:checked").val());


    $("#total").text(size);
    $(".output").show();
  })
})
