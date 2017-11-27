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

    retrieveRandomDayphoto(){
        return new Promise((resolve, reject) => {
            Dayphoto.count().exec(function (err, count) {
                const random = Math.floor(Math.random()*count)
                Dayphoto.find().skip(random).limit(1)
                    .then(resolve)
                    .catch(reject)
            })
        })
    }
    retrieveDifferentRandomDayphoto(_id){
        return new Promise((resolve, reject) => {
            Dayphoto.count().exec(function (err, count) {
                const random = Math.floor(Math.random()*(count-1))
                Dayphoto.find({_id: {$ne: _id}}).skip(random).limit(1)
                    .then(resolve)
                    .catch(reject)
            })
        })
    }

    addLike(_id){
        return new Promise((resolve, reject) => {
            if (!_id)
                throw new Error('no id provided')

            Dayphoto.findOneAndUpdate({_id}, {$inc : {'likes' : 1}})
                .then(resolve)
                .catch(reject)

        })
    }    
}

module.exports = DayphotoData