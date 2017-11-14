const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HistorySchema = new Schema({
	idDog: String,
	nameDog: String,
	photo: String,
	tag: [String],
	date:{ type: Date, default: Date.now },
	popularity: { type: Number, default: 0 },
	like: { type: Number, default: 0 },
	comments:[{
		comment: String,
		idDog:String
	}],
	dislike: { type: Number, default: 0 }
})

module.exports = mongoose.model('History', HistorySchema)