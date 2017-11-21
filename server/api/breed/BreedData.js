const Breed = require('./BreedSchema')

class BreedData {

    listBreeds(){
        return new Promise((resolve, reject) => {
            Breed.find({}, 'name')
                .then(resolve)
                .catch(reject)
        })  
    }
}

module.exports = BreedData