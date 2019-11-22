/**  creates html element for order-item
* @param title {String} - menu-item price exracted from clicked html article.
* @param price {String} - (menu-item price exracted from clicked html article)
* @param id {String} - (menu-item id exracted from clicked html article)
**/
const addOrderItem = (title, price, id) =>{
  return `<div class="dp-flex justify-content-between text-light ord-item">
  <label class="pr-2">${title}</label>
  <input type="number" data-input-id="${id}"  value="1" name="${id}" min="0" max="100" step="1" size="2" class="float-right quantity"><br> <p class="text-right clear-fix w-100 item-price">${price}</p>
  </div>`;
};

/** updates order total
 * - use on all form changes
 * */
const updateTotal = ()=> {
  let sum =0;
  $(".item-price").each(function() {
    let itemPrice = $(this).text();
    let sterPrice = Number(itemPrice.slice(1));
    sum += sterPrice;
    let itemTotal = sum.toFixed(2);
    let tax = (itemTotal * 0.13).toFixed(2);
    let finalTotal = (Number(itemTotal) + Number(tax)).toFixed(2);
    $("#totprice").text(`$${itemTotal}`);
    $("#tax").text(`$${tax}`);
    $(".total_price").text(`$${finalTotal}`);
    $("#totalprice").val(`${finalTotal}`);
  })
};

//jQuery
$(function() {
  /**
   * Retrieves menu-items
   * Appends them to order
   */
  $('.menu-item').on('click', function(event) {
    let $title = $(this).find(".menu-title").text();
    let $price = $(this).find(".price").text();
    let $id = $(this).find(".item-id").text();
    $(".form-items").append(addOrderItem($title, $price, $id));
    updateTotal();
  });

  //updates single item total
  $(".form-items").on("change", "input", function(event) {
    const increment= $(this).val();
    const itemId = $(this).attr("data-input-id");
    const itemPrice = $(".menu-items").find(`[data-item-id="${itemId}"]`).text();
    let sterPrice = Number(itemPrice.slice(1));
    let price = sterPrice * increment;
    price = price.toFixed(2);
    $(this).siblings(".item-price").text(`$ ${price}`);
    updateTotal();
  });

});

// Order Submission Alert
$(function() {
  const $submit = $("#orderSubmit");
  $submit.on('click', function () {
    event.preventDefault()
    $("#orderAlert").css('visibility', 'visible')
    $('.order-form').fadeOut('slow')
    setTimeout(function(){ $('.order-form').submit(); }, 3000);
  })
});


//Show either login or sign up forms
$(function(){
  $("#sign").on("click", function(){
      $("#signup").removeClass("d-none").addClass("d-block");
  })
  $("#log").on("click", function(){
    $("#login").removeClass("d-none").addClass("d-block");
})
});

