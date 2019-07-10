const express = require("express");
const router = express.Router();
const passport = require('passport');
// const passportEbay = require("../../server/config/passportEbay");
// const passportGoogle = require("../../server/config/passportGoogle");

router.get("/ebay", passport.authenticate("ebay"));

router.get(
  "/ebay/callback",
  passport.authenticate("ebay", {
    failureRedirect: "/channels"
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
  res.redirect("/dashboard");
});

router.get('/etsy', passport.authenticate('etsy', {
  scope: ['profile_r', 'email_r', 'listings_r', 'profile_w']
}));
router.get('/etsy/callback', passport.authenticate('etsy', {
  failureRedirect: '/channels',
  successRedirect: '/channels'
  })
);

module.exports = router;
