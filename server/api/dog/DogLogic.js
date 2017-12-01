const dogData = new(require('./DogData'))

class DogLogic {
	createDog(name, idUser, chip, idBreed, gender, weight,birthdate, profilePhoto){
		const _name = name.toLowerCase()
		const _gender = gender.toLowerCase()
		return dogData.createDog(_name, idUser, chip, idBreed, _gender, weight, birthdate, profilePhoto)
	}
	updateDog(_id, name, chip, idBreed, _gender, weight, birthdate, profilePhoto){
		const _name = name.toLowerCase()
		const gender = _gender.toLowerCase()
		return dogData.updateDog(_id, _name, chip, idBreed, gender, weight, birthdate, profilePhoto)
	}
	retrieveDogById(_id){
		return dogData.retrieveDogById(_id)
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
	searchDog(search){
		const _search = search.toLowerCase()
		return dogData.searchDog(_search)
	}
}

module.exports = DogLogic