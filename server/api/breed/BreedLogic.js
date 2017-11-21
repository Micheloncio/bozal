const breedData = new(require('./BreedData'))

class BreedLogic {

    listBreeds(){
        return breedData.listBreeds()
    }
}

module.exports = BreedLogic