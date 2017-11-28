const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DayphotoSchema = new Schema({
	idDog: String,
	nameDog: String,
	badge: { type: String, default: '' },
	date:{ type: Date, default: Date.now },
	likes: { type: Number, default: 0 },
	photo: String
})

module.exports = mongoose.model('Dayphoto', DayphotoSchema)