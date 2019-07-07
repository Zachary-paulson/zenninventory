const router = require("express").Router();
const ebayAuthRoutes = require("./authEbay");

// Book routes
module.exports = router => {
  router.use("/auth", ebayAuthRoutes);
}
