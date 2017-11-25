const Dayphoto = require('./DayphotoSchema')

class DayphotoData {
	create(idDog, nameDog, photo) {
        return new Promise((resolve, reject) => {
            if (!idDog)
                throw new Error('no idDog provided')

            if (!nameDog)
                throw new Error(`tag name cannot be ${nameDog}`)

             if (!photo)
                throw new Error('no photo provided')

            const dayphoto = new Dayphoto({ idDog, nameDog, photo})

            dayphoto.save()
                .then(resolve)
                .catch(reject)
        })
    }
    listAll(){
        return new Promise((resolve, reject) => {

            Dayphoto.find()
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = DayphotoData