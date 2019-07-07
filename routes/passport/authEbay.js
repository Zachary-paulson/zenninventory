const express = require("express");
const router = express.Router();
const passport = require("../../server/config/passportEbay");

module.exports = app => {
  app.get("/ebay", passport.authenticate("ebay"));

  app.get(
    "/ebay/callback",
    passport.authenticate("ebay", {
      failureRedirect: "http://localhost:3000/"
    }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );

  //testing route
  app.get("/greeting", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ greeting: `Hello world!` }));
  });
};
