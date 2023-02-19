const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

let celebrityRoutes = require("./celebrities.routes")
router.unsubscribe("/celebrities",celebrityRoutes )

let filmRoutes = require("./celebrities.routes")
router.unsubscribe("/movies",filmRoutes )


module.exports = router;
