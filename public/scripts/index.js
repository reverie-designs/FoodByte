
// let formItem =`<div class="dp-flex justify-content-between text-light">
// <label class="pr-2">${title}</label>
// <input type="number" name="menu_item" min="0" max="100" step="1" size="2" value="1"><br> <span><%= item.price %></span>
// </div>`;
const addOrderItem = (title, price) =>{
  return `<div class="dp-flex justify-content-between text-light">
  <label class="pr-2">${title}</label>
  <input type="number" name="menu_item" min="0" max="100" step="1" size="2" value="1"><br> <span>${price}</span>
  </div>`;
};
let total = 0;
$(function() {
  $('.menu-item').on('click', function(event) {

    let $title = $(this).find(".menu-title").text();
    let $price = $(this).find(".price").text();
    let sterPrice = Number($price.slice(1));
    total = total + sterPrice;

    let itemTotal = total.toFixed(2);
    let tax = (itemTotal * 0.13).toFixed(2);
    let finalTotal = (Number(itemTotal) + Number(tax)).toFixed(2);
    $(".form-items").append(addOrderItem($title, $price));
    $("#totprice").text(itemTotal);
    $("#tax").text(tax);
    $("#total").text(finalTotal);
  })
});

