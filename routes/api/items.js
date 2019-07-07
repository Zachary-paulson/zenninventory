const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

console.log('items was called');
// Matches with "/api/items"
router.route("/")
  .get(itemsController.findAll)
  .post(itemsController.create)
  .delete(itemsController.removeAll);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

router.route('/greetings').get((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello world!` }));
})

module.exports = router;
