// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require("cookie-session");

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['key1']
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users"); //=========================================
const widgetsRoutes = require("./routes/widgets");
const restaurantRoutes = require("./routes/restaurants");
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const ordersRoutes = require("./routes/orders");
const signupRoutes = require("./routes/signup");
const confirmRoutes = require("./routes/confirm");
const orderhistoryRoutes = require("./routes/orderhistory");

// const dataHelpers = require(".");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// const data = dataHelpers(db);
// data.getUserByEmail('email').then(user => console.log('WORKS!: ', user));

// app.use("/api/users", usersRoutes(db)); //are we keeping it this way //==============
app.use("/api/widgets", widgetsRoutes(db));
app.use("/restaurants", restaurantRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/orders", ordersRoutes(db));
app.use("/signup", signupRoutes(db));
app.use("/logout", logoutRoutes());
app.use("/confirm", confirmRoutes(db));
app.use("/orderhistory", orderhistoryRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// redirects to the restaurant page from here
app.get("/", (req, res) => {
  res.redirect("/restaurants");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
