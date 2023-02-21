const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((result) => {
      res.render("celebrities/celebrities", {result: result})
    })
    .catch((err) => {
      console.log(err)
    })
})
// iteration three
  router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

  router.post("/create", (req, res, next)=>{
    let celebs = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase 
    };
    Celebrity.create(celebs)
    .then(result => {
        console.log("result:", result);
        // res.send(result);
        res.redirect("/celebrities")  
    })
    .catch(res.render("celebrities/new-celebrity"))
})
module.exports = router;