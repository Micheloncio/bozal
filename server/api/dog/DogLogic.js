const dogData = new(require('./DogData'))

class DogLogic {
	createDog(name, idUser, chip, idBreed, gender, weight,birthdate, profilePhoto){
		const _gender = gender.toLowerCase()
		return dogData.createDog(name, idUser, chip, idBreed, _gender, weight, birthdate, profilePhoto)
	}
	updateDog(_id, name, chip, idBreed, _gender, weight, birthdate, profilePhoto){
		const gender = _gender.toLowerCase()
		return dogData.updateDog(_id, name, chip, idBreed, gender, weight, birthdate, profilePhoto)
	}
	listDogsByUser(idUser){
		return dogData.listDogsByUser(idUser)
	}
	deleteDog(_id){
		return dogData.deleteDog(_id)
	}
	updatePoints(_id,points){
		return dogData.updatePoints(_id,points)
	}
}

module.exports = DogLogic