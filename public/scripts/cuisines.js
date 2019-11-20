$(document).ready(function() {
  let type = ['Italian', 'American', 'Thai'];

  $("select").on("change", (function() {
    let selection = this.value;
    console.log(selection);
    if (selection === 'All') {
      $("article").removeClass("d-none").addClass("d-flex");
    } else {
      let unselectedType = type.filter(cuisines => cuisines !== selection);
      $("article").removeClass("d-none").addClass("d-flex");
      for (let c of unselectedType) {
        $(`#restaurants .${c}`).removeClass("d-flex").addClass("d-none");
      }
    }
  }));
});

// $('#restraunts').find(selection).removeClass("d-flex").addClass("d-none");
// console.log(unselectedType);
// $(`#restaurants .${selection}`).removeClass("d-flex").addClass("d-none");
