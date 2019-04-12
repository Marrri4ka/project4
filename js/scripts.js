function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings
}

Pizza.prototype.calculatePrice = function() {
  var price;
  if (this.size === "mini") {
    price = 9;
  }
  if (this.size === "small") {
    price = 11;
  }
  if (this.size === "medium") {
    price = 13;
  }
  if (this.size === "large") {
    price = 16;
  }
}

$(document).ready(function() {
  $("#confirm").click(function() {

    var size = $('input[name=inlineRadioOptions]:checked').val();
    $("#final-price").text("You ordered " + size + "pizza");
    $("#final-price").show();
  });

});