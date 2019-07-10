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

router.get("/google/redirect", (req, res) => {
  res.redirect("http://localhost:3000/dashboard");
});

router.get('/etsy', passport.authenticate('etsy', {
  scope: ['profile_r', 'email_r', 'listings_r', 'profile_w']
}));
router.get('/etsy/callback', passport.authenticate('etsy', {
  failureRedirect: 'http://localhost:3000/channels',
  successRedirect: 'http://localhost:3000/channels'
  })
);

module.exports = router;
