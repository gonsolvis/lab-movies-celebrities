//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//crear Schema
const movieSchema = new Schema({
    title: {
        type: String,
       
    },
    genre: {
        type: String,

    },
    plot: {
        type: String,

    },
    cast: {
        type: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
        
    }

});
//crear modelo a partir del movieSchema
const Movie = mongoose.model("Movie", movieSchema); //collection campuses
//exportar modelo
module.exports = Movie;