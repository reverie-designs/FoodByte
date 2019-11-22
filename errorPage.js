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
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/styles/layout.css" type="text/css" />

    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/096d0c019b.js" crossorigin="anonymous"></script>
    <!-- JQuery -->
    <script type="text/javascript" src="/vendor/jquery-3.0.0.js"></script>
    <!-- Custom JavaScript -->
    <script type="text/javascript" src="/scripts/app.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</head>

<body class="bg-dark">

<main class="d-flex justify-content-between login-main">

  <section class="log-in mr-4">
    <h1 class="text-light">${msg}</h1>
    <a href="${redirect}"><h1 class="text-light">Click here to get back to the restaurants</h1></a>
  </section>
</main>


    <footer class="text-light text-center"> <p><small> FoodByte created By Herm, Arv, Dasha For Lighthouse Labs 2019</small></p></footer>
  </body>
</html>
  `;
};

module.exports = errorPage;
