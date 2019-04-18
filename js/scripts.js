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

      $("#complete-order").show();
    }
  });

  $("#complete-order").click(function() {
    var toppingsArray = [];
    $("input:checkbox[name=topping]:checked").each(function() {
      toppingsArray.push($(this).val());
    });
    if (toppingsArray.length === 0) {
      alert("choose at least 1 topping");
    } else {
      $(".delivery").slideDown();
      $(".toppings").slideUp();
    }
  });

  $("#continue1").click(function() {
    var delivery = $('input[name=inlineRadioDelivery]:checked').val();
    if (!delivery) {
      alert("Please choose delivery method");
    } else {
      $("#delivery1").text(delivery);
      $("#delivery1").show();
      $(".delivery").slideUp();
      var toppingsArray = [];
      $("input:checkbox[name=topping]:checked").each(function() {
        toppingsArray.push($(this).val());
      });

      $(".confirmation").slideDown();
      $(".toppings").slideUp();
      var size = $('input[name=inlineRadioOptions]:checked').val();
      var pizza = new Pizza(size, toppingsArray);
      $("#final-price").text("You ordered " + size + " pizza with: ");
      $("#final-price").show();
      for (var k = 0; k < toppingsArray.length; k++) {
        var l = toppingsArray[k];
        $("ul").append("<li>" + l + "</li>")
      }
      $("#price").text("Total : $" +
        pizza.calculatePrice());
    }
  });
});