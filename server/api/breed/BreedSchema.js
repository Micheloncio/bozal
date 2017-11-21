const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BreedSchema = new Schema({
        name: String,
        size: String,
        weight: {
            male: {
                min: Number,
                max: Number
            },
            female: {
                min: Number,
                max: Number
            }
        },
        activityrecomended: String,
        description: { type: String, default: '' },
        pathologies: [{ type: String, default: '' }],
        conduct: [{ type: String, default: '' }]
})

module.exports = mongoose.model('Breed', BreedSchema)