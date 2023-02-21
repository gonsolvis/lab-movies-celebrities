//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//crear Schema
const celebritySchema = new Schema({
    name: {
        type: String,
       

    },
    occupation: {
        type: String,

    },
    catchPhrase: {
        type: String,
       
    },

});
//crear modelo a partir del movieSchema
const Celebrity = mongoose.model("Celebrity", celebritySchema); //collection campuses
//exportar modelo
module.exports = Celebrity;