const Dog = require('./DogSchema')

class DogData {
	create(name, idUser, idBreed, wheight,birthdate) {
        return new Promise((resolve, reject) => {
            if (!name)
                throw new Error('no dog name provided')

            if (!idUser)
                throw new Error('no idUser provided')

            if (!idBreed)
                throw new Error('no idBreed provided')

            if(!wheight)
            	throw new Error('no wheight provided')

            if(!birthdate)
            	throw new Error('no birthdate provided')

            const dog = new Dog({ name, idUser, idBreed, wheight, birthdate })

            dog.save()
                .then(resolve)
                .catch(reject)
        })
    }
    listDogsByUser(idUser){
        return new Promise((resolve, reject) => {
            if(!idUser)
                    throw new Error('no idUser provided')

            Dog.find({idUser})
                .then(resolve)
                .catch(reject)

        })
    }
}

module.exports = DogData