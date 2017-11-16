const mongoose = require('mongoose')

const Schema = mongoose.Schema

var Dog = mongoose.model('Dog');

const HistorySchema = new Schema({
	idDog: String,
	nameDog: String,
	tag: [String],
	date:{ type: Date, default: Date.now },
	popularity: { type: Number, default: 0 },
	likes: [{ type: Schema.ObjectId, ref: "Dog" }],
	comments:[{
		comment: String,
		dog: { type: Schema.ObjectId, ref: "Dog" } 
	}],
	dislikes: [{ type: Schema.ObjectId, ref: "Dog" }],
	photo: String
})

module.exports = mongoose.model('History', HistorySchema)