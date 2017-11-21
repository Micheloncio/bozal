const dogData = new(require('./DogData'))

class DogLogic {
	create(name, idUser, chip, idBreed, gender, weight,birthdate, profilePhoto){
		const _gender = gender.toLowerCase()
		return dogData.create(name, idUser, chip, idBreed, _gender, weight, birthdate, profilePhoto)
	}
	listDogsByUser(idUser){
		return dogData.listDogsByUser(idUser)
	}
}

module.exports = DogLogic