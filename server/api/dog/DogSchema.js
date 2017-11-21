const mongoose = require('mongoose')

const Schema = mongoose.Schema

//const Breed = mongoose.model('Breed');

const DogSchema = new Schema({
		name: String,
		idUser: String,
		chip: String,
		idBreed: { type: Schema.ObjectId, ref: "Breed" },
		gender: String,
		weight: Number,
		birthdate: Date,
		profilePhoto: String,
		photos: [String],//MongoDB acepta hasta 16mb
		level: { type: Number, default: 1 },
		points: { type: Number, default: 20 },
		popularity: { type: Number, default: 0 },
		agresivity: { type: Number, default: 0 },
		sociality: { type: Number, default: 0 }
})

module.exports = mongoose.model('Dog', DogSchema)