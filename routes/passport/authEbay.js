const express = require("express");
const router = express.Router();
const passport = require("../../server/config/passportEbay");

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

module.exports = router;
