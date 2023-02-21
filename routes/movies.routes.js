const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");
const router = require("express").Router();
// iteration three



router.get("/", (req, res, next) => {
  Movie.find()
      .then(result => {
          res.render("movies/movies", { result })
      })
      .catch(err => next(err))

})

router.get("/create", (req, res, next) => {
  Celebrity.find()
    .then(result => {
      res.render("movies/new-movie", { result })
    })
    .catch((err) => {
      console.log(err)
    })
})




router.post("/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body
  Movie.create({ title, genre, plot, cast })
    .then(result => {
      console.log("result:", result);
      // res.send(result);
      res.redirect("/movies")
    })
    .catch(res.render("movies/new-movie"))
})


router.get("/:id", (req, res, next) => {
  const movieID = req.params.id
  Movie.findById(movieID)
    .populate("cast")
    .then(result => {
      res.render("movies/movie-details", { result })
    })
    .catch(err => next(err))
})

router.post("/:id/delete", (req, res, next) => {
  const movieID = req.params.id
  Movie.findByIdAndRemove(movieID)
    .then(result => {
      res.redirect("/movie")
    })
    .catch(err => next(err))
})

router.get("/:id/edit", (req, res, next) => {
  const movieID = req.params.id
  Movie.findById(movieID)
    .then(result => {
      const film = result
      Celebrity.find()
        .then(result => {
          const actors = result
          res.render("movies/edit-movie", { film, actors })
        })

    })
    .catch(err => next(err))
})


router.post("/:id/edit", (req, res, next) => {
  const { title, genre, plot, cast } = req.body
  const movieID = req.params.id
  Movie.findByIdAndUpdate(movieID, { title, genre, plot, cast })
      .then(result => {
         res.redirect(`/movies/${movieID}`)
      })
      .catch(err => next(err))

})

module.exports = router;