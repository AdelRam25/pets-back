const mongoose = require('mongoose');


module.exports = mongoose.model('Pet', {
    image: String,
    name: String,
    type: String,
   description : String
});

