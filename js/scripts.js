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
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === "tomato") {
      price += 1;
    }
    if (this.toppings[i] === "cheese") {
      price += 1;
    }
    if (this.toppings[i] === "red-pepper") {
      price += 1;
    }
    if (this.toppings[i] === "pineapple") {
      price += 1;
    }
    if (this.toppings[i] === "bacon") {
      price += 2;
    }
    if (this.toppings[i] === "black-olives") {
      price += 2;
    }
    if (this.toppings[i] === "mushroom") {
      price += 2;
    }
    if (this.toppings[i] === "ham") {
      price += 2;
    }

  }
  return price;
}

$(document).ready(function() {
  $("#confirm").click(function() {
    var size = $('input[name=inlineRadioOptions]:checked').val();

    if (!size) {
      alert("you forgot to choose size!");
    } else {
      $(".toppings").slideDown();
      $(".size").slideUp();

    }



    $("#complete-order").click(function() {


      var toppingsArray = [];
      // create function

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
      if (toppingsArray.length === 0) {
        alert("choose at least 1 topping");
      } else {



        $(".confirmation").slideDown();
        $(".toppings").slideUp();
        var pizza = new Pizza(size, toppingsArray);
        $("#final-price").text("You ordered " + size + " pizza with: " + toppingsArray);
        $("#final-price").show();

        $("#price").text("Total : $" +
          pizza.calculatePrice());
      }
    });

  });

});