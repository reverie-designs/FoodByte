const addOrderItem = (title, price, id) =>{
  return `<div class="dp-flex justify-content-between text-light">
  <label class="pr-2">${title}</label>
  <input type="number" name="${id}" min="0" max="100" step="1" size="2" value="1"><br> <span>${price}</span>
  </div>`;
};
let total = 0;
$(function() {
  $('.menu-item').on('click', function(event) {

    let $title = $(this).find(".menu-title").text();
    let $price = $(this).find(".price").text();
    let sterPrice = Number($price.slice(1));
    total = total + sterPrice;
    let $id = $(this).find(".item-id").text();
    let itemTotal = total.toFixed(2);
    let tax = (itemTotal * 0.13).toFixed(2);
    let finalTotal = (Number(itemTotal) + Number(tax)).toFixed(2);
    $(".form-items").append(addOrderItem($title, $price, $id));
    $("#totprice").text(itemTotal);
    $("#tax").text(tax);
    $(".total_price").text(finalTotal);
    $("#totalprice").val(finalTotal);
  })

  // $(".order-form").on("submit", function(e){
  //   e.preventDefault();
  // })
});

