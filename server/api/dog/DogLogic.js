const dogData = new(require('./DogData'))

class DogLogic {
	create(name, idUser, idBreed, wheight,birdDate){
		return dogData.create(name, idUser, idBreed, wheight,birdDate)
	}
}

module.exports = DogLogic