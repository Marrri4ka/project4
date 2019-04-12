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
  return price;
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

    if ($("ham").is(":checked")) {
      toppingsArray.push("ham");
    }
    console.log(toppingsArray);




    $("#final-price").text("You ordered " + size + " pizza with:" + toppingsArray);
    $("#final-price").show();
    var pizza = new Pizza(size, toppingsArray);


    $("#price").text("Pay: $" +
      pizza.calculatePrice());
    $("#price").show();


  });

});