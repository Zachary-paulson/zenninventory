const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const passport = require('passport');
const passportEbaySetup = require('./server/config/passportEbay');
const passportGoogleSetup = require('./server/config/passportGoogle');
const passportEtsySetup = require('./server/config/passportEtsy');
const expressSession = require('express-session');

const apiRoutes = require('./routes/api/index');
const authRoutes = require('./routes/passport/authRoutes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport
app.use(passport.initialize());
app.use(passport.session());

//Etsy requires express session
app.use(expressSession({
    secret: 'The fox jumps over the moon',
    resave: false,
    saveUninitialized: true
}));

// app.use(function (req, res, next) {
//   // allow origin
//   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/inventory');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   next();
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zenninventorylist", { useNewUrlParser: true });


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  console.log("HIT IT");
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log(process.env.NODE_ENV);
});
