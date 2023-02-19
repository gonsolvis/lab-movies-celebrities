const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");
const router = require("express").Router();
// iteration three

router.get("/movies/create", (req,res,next)=>{
  Celebrity.find()
  .then((data)=>{
      res.render("movies/new-movie", {celebs: data})
  })
  .catch((err)=>{
      console.log(err)
  })
})

   

  router.post("/create", (req, res, next) => {
    const { title, genre, plot, cast } = req.body
    Movie.create({ title, genre, resultplot, cast })
      .then(result => {
        console.log("result:", result);
        // res.send(result);
        res.render("/movies") 
      })
      .catch(res.render("movies/new-movie"))
  })

  //iteration four


  // router.get('/celebrities', (req, res, next) => {
  //   Celebrity.find()
  //     .then(results => {
  //       // -> allTheBooksFromDB is a placeholder, it can be any word
  //       console.log('Retrieved celebrities from DB:', results);

  //       // we call the render method after we obtain the books data from the database -> allTheBooksFromDB
  //       res.render("celebrities/celebrities", { celebrities: results}); // pass `allTheBooksFromDB` to the view (as a variable books to be used in the HBS)
  //     })
  //     .catch(error => {
  //       console.log('Error while getting the books from the DB: ', error);

  //       // Call the error-middleware to display the error page to the user
  //       next(error);
  //     });
  // });

  module.exports = router;