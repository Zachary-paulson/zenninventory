const express = require("express");
const router = express.Router();
const passport = require('passport');
// const passportEbay = require("../../server/config/passportEbay");
// const passportGoogle = require("../../server/config/passportGoogle");

router.get("/ebay", passport.authenticate("ebay"));

router.get(
  "/ebay/callback",
  passport.authenticate("ebay", {
    failureRedirect: "http://localhost:3000/channels"
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/channels");
  }
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

module.exports = router;
