//import connection
const mongoose = require('../db/connection');

/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/
const itemSchema = new mongoose.Schema({
	field1: { type: String, required: true },
	field2: { type: String, required: true }
});

//export model
module.exports = mongoose.model('Item', itemSchema);
