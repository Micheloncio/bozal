const Dog = require('./DogSchema')

class DogData {
	create(name, idUser, idBreed, wheight,birdDate) {
        return new Promise((resolve, reject) => {
            if (!name)
                throw new Error('no dog name provided')

            if (!idUser)
                throw new Error('no idUser provided')

            if (!idBreed)
                throw new Error('no idBreed provided')

            if(!wheight)
            	throw new Error('no wheight provided')

            if(!birdDate)
            	throw new Error('no birdDate provided')

            const dog = new Dog({ name, idUser, idBreed, wheight, birdDate })

            dog.save()
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = DogData