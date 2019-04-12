function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings
}


Pizza.prototype.calculatePrice = function() {
  var price;
  if (this.size === "small") {
    price = 9;
  }
  if (this.size === "medium") {
    price = 11;
  }
  if (this.size === "large") {
    price = 13;
  }
  if (this.size === "x-large") {
    price = 16;
  }
  for (var i = 0; i < toppingsArray.length; i++) {
    if (toppingsArray[i] === "tomato") {
      price = +2;

    }
    return price;
  }
}

$(document).ready(function() {
  $("#confirm").click(function() {

    var size = $('input[name=inlineRadioOptions]:checked').val();
    var toppingsArray = [];

    if ($("#tomato").is(":checked")) {
      toppingsArray.push("tomato");
    }
    if ($("#cheese").is(":checked")) {
      toppingsArray.push("cheese");
    }

    if ($("#pineapple").is(":checked")) {
      toppingsArray.push("pineapple");
    }
    if ($("#red-pepper").is(":checked")) {
      toppingsArray.push("red-pepper");
    }
    if ($("#bacon").is(":checked")) {
      toppingsArray.push("bacon");
    }
    if ($("#black-olives").is(":checked")) {
      toppingsArray.push("black-olives");
    }
    if ($("#mushroom").is(":checked")) {
      toppingsArray.push("mushroom");
    }
    if ($("#ham").is(":checked")) {
      toppingsArray.push("ham");
    }




    $("#final-price").text("You ordered " + size + " pizza with:" + toppingsArray);
    $("#final-price").show();
    var pizza = new Pizza(size, toppingsArray);
    $("#price").text("Pay: $" +
      pizza.calculatePrice());
    $("#price").show();


  });

});