const errorPage = (status, redirect, msg) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <title>FoodByte - ERROR ${status} </title>

    <link rel="stylesheet" href="/vendor/normalize-4.1.1.css" type="text/css" />
    <link rel="stylesheet" href="/vendor/border-box.css" type="text/css" />
    <!-- Fonts -->
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>

<body class="bg-dark">

<main class="m-auto text-center w-50">

  <section class="log-in mr-4 mt-5">
    <h1 class="text-light">${msg}</h1>
    </section>
  <section class="log-in mr-4">
    <h1 class="text-light">Go back to <a href="${redirect}"><span class="text-info">FoodByte</a> </span></h1>
   <div> <img src="https://i.pinimg.com/originals/77/8e/29/778e294a406890bc49c93886dc2e5f2e.gif"> </div>
    </section>
</main>


    <footer class="text-light text-center"> <p><small> FoodByte created By Herm, Arv, Dasha For Lighthouse Labs 2019</small></p></footer>
  </body>
</html>
  `;
};

module.exports = errorPage;
