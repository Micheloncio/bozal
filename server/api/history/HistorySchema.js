const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Dog = mongoose.model('Dog');

const HistorySchema = new Schema({
	idDog: String,
	nameDog: String,
	tag: String,
	description: String,
	date:{ type: Date, default: Date.now },
	popularity: { type: Number, default: 0 },
	likes: [String],
	comments:[{
		comment: String,
		dog: { type: Schema.ObjectId, ref: "Dog" } 
	}],
	dislikes: [String],
	photo: String
})

module.exports = mongoose.model('History', HistorySchema)