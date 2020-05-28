const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    item: {type: String, required: true}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;