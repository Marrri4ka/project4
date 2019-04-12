function Pizza(size) {
  this.size = size

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
    $("#final-price").text("You ordered " + size + " pizza");
    $("#final-price").show();
    var finalPrice = new Pizza(size);
    $("#price").text("Pay: $" +
      finalPrice.calculatePrice());
    $("#price").show();


  });

});