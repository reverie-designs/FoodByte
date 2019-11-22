$(document).ready(function() {
  let type = ['Italian', 'American', 'Thai'];

  $("select").on("change", (function() {
    let selection = this.value;
    if (selection === 'All') {
      $("article").removeClass("d-none").addClass("d-block");
    } else {
      let unselectedType = type.filter(cuisines => cuisines !== selection);
      $("article").removeClass("d-none").addClass("d-block");
      for (let c of unselectedType) {
        $(`#restaurants .${c}`).removeClass("d-block").addClass("d-none");
      }
    }
  }));
});
