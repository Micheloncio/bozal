const Dog = require('./DogSchema')
const Breed = require('../breed/BreedSchema')

class DogData {
	createDog(name, idUser, chip, idBreed, gender, weight, birthdate, profilePhoto) {
        return new Promise((resolve, reject) => {
            if (!name)
                throw new Error('no dog name provided')

            if (!idUser)
                throw new Error('no idUser provided')

            if (!chip)
                throw new Error('no dog chip provided')

            if (!idBreed)
                throw new Error('no idBreed provided')

            if(!gender)
                throw new Error('no gender provided')

            if(!weight)
            	throw new Error('no weight provided')

            if(!birthdate)
            	throw new Error('no birthdate provided')

            if(!profilePhoto)
                throw new Error('no profilePhoto provided')

            const dog = new Dog({ name, idUser, chip, idBreed, gender, weight, birthdate, profilePhoto })

            dog.save()
                .then(resolve)
                .catch(reject)
        })
    }
    updateDog(_id, name, chip, idBreed, gender, weight, birthdate, profilePhoto) {
        return new Promise((resolve, reject) => {
            if (!_id)
                throw new Error('no dog _id provided')

            if (!name)
                throw new Error('no dog name provided')

            if (!chip)
                throw new Error('no dog chip provided')

            if (!idBreed)
                throw new Error('no idBreed provided')

            if(!gender)
                throw new Error('no gender provided')

            if(!weight)
                throw new Error('no weight provided')

            if(!birthdate)
                throw new Error('no birthdate provided')

            if(!profilePhoto)
                throw new Error('no profilePhoto provided')

            Dog.update({_id},{ name, chip, idBreed, gender, weight, birthdate, profilePhoto })
                .then(resolve)
                .catch(reject)
        })
    }
    deleteDog(_id){
        return new Promise((resolve, reject) => {
            if(!_id)
                    throw new Error('no _id provided')

            Dog.remove({_id})
                .then(resolve)
                .catch(reject)

        })
    }
    listDogsByUser(idUser){
        return new Promise((resolve, reject) => {
            if(!idUser)
                    throw new Error('no idUser provided')

            Dog.find({idUser})
                .then(dog=>{
                    Breed.populate(dog, {path: 'idBreed'})
                        .then(resolve)
                    })
                .catch(reject)

        })
    }
    updatePoints(_id,points) {
        return new Promise((resolve, reject) => {
            if (!_id)
                throw new Error('no dog _id provided')

            if (!points)
                throw new Error('no dog points provided')

            Dog.update({_id},{ points })
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = DogData