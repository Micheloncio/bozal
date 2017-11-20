const dogData = new(require('./DogData'))

class DogLogic {
	create(name, idUser, idBreed, wheight,birthdate){
		return dogData.create(name, idUser, idBreed, wheight,birthdate)
	}
	listDogsByUser(idUser){
		return dogData.listDogsByUser(idUser)
	}
}

module.exports = DogLogic