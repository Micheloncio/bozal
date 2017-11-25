const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DayphotoSchema = new Schema({
	idDog: String,
	nameDog: String,
	badge: { type: String, default: 'none' },
	date:{ type: Date, default: Date.now },
	likes: [String],
	photo: String
})

module.exports = mongoose.model('Dayphoto', DayphotoSchema)