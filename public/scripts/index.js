const addOrderItem = (title, price, id) =>{
  return `<div class="dp-flex justify-content-between text-light ord-item">
  <label class="pr-2">${title}</label>
  <input data-input-id="${id}" type="number" name="${id}" min="0" max="100" step="1" size="2" class="float-right quantity"><br> <p class="text-right clear-fix w-100 item-price">${price}</p>
  </div>`;
};
let total = 0;
let value = 1;

const getTotal = (price) => {
  total = total + (price);
  let itemTotal = total.toFixed(2);
  let tax = (itemTotal * 0.13).toFixed(2);
  let finalTotal = (Number(itemTotal) + Number(tax)).toFixed(2);
  $("#totprice").text(itemTotal);
  $("#tax").text(tax);
  $(".total_price").text(finalTotal);
  $("#totalprice").val(finalTotal);
};
$(function() {
  $('.menu-item').on('click', function(event) {

    // let quant= $(".quantity").val();
    // console.log(quant);
    let $title = $(this).find(".menu-title").text();
    let $price = $(this).find(".price").text();
    let sterPrice = Number($price.slice(1));
    sterPrice = sterPrice*value;
    getTotal(sterPrice);
    // total = total + (sterPrice * Number(value));
    let $id = $(this).find(".item-id").text();
    // let itemTotal = total.toFixed(2);
    // let tax = (itemTotal * 0.13).toFixed(2);
    // let finalTotal = (Number(itemTotal) + Number(tax)).toFixed(2);
    $(".form-items").append(addOrderItem($title, $price, $id));
    // $("#totprice").text(itemTotal);
    // $("#tax").text(tax);
    // $(".total_price").text(finalTotal);
    // $("#totalprice").val(finalTotal);
  })
  // $(".form-items").on("change", "input", function(event) {
  //   value = $(this).val(); //incremented input value
  //   // alert(value);
  // });

  $(".form-items").on("change", "input", function(event) {
    const increment= $(this).val();
    const itemId = $(this).attr("data-input-id");
    console.log(itemId);
    const itemPrice = $(".menu-items").find(`[data-item-id="${itemId}"]`).text();
    console.log(itemPrice);
    let sterPrice = Number(itemPrice.slice(1));
    let price = sterPrice * increment;
    price = price.toFixed(2);
    $(this).siblings(".item-price").text(`$ ${price}`);
    getTotal(price);
  })

});



const getQuntity = () => {
   console.log($(".quantity").value);

}

// Order Submission Alert
$(function() {
  const $submit = $("#orderSubmit");
  $submit.on('click', function () {
    event.preventDefault()
    $("#orderAlert").css('visibility', 'visible')
    $('.order-form').fadeOut('slow')
    setTimeout(function(){ $('.order-form').submit(); }, 3000);})
});
