const dogData = new(require('./DogData'))

class DogLogic {
	create(name, idUser, chip, idBreed, gender, weight,birthdate, profilePhoto){
		const _gender = gender.toLowerCase()
		return dogData.create(name, idUser, chip, idBreed, _gender, weight, birthdate, profilePhoto)
	}
	update(_id, name, chip, idBreed, _gender, weight, birthdate, profilePhoto){
		const gender = _gender.toLowerCase()
		return dogData.update(_id, name, chip, idBreed, gender, weight, birthdate, profilePhoto)
	}
	listDogsByUser(idUser){
		return dogData.listDogsByUser(idUser)
	}
	deleteDog(_id){
		return dogData.deleteDog(_id)
	}
}

module.exports = DogLogic