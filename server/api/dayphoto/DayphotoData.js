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
    listAllByDogId(idDog){
        return new Promise((resolve, reject) => {
            if (!idDog)
                throw new Error('no idDog provided')

            Dayphoto.find({idDog, badge:{$ne:''}})
                .then(resolve)
                .catch(reject)
        })
    }
    countAll(){
        return Dayphoto.count({badge:''}).exec(function (err, count) {
            return count
        })
    }
    retrieveRandomDayphoto(random){
        return new Promise((resolve, reject) => {
            Dayphoto.find({badge:''}).skip(random).limit(1)
                .then(resolve)
                .catch(reject)
        })
    }
    retrieveDifferentRandomDayphoto(_id,random){
        return new Promise((resolve, reject) => {
                Dayphoto.find({_id: {$ne: _id},badge:''}).skip(random).limit(1)
                    .then(resolve)
                    .catch(reject)
        })
    }
    listAllSortByLikes(){
        return new Promise((resolve, reject) => {
            Dayphoto.find({},'likes badge').sort({likes:-1})
                .then(resolve)
                .catch(reject)
        })
    }
    
    updateBadge(_id,badge){
        return new Promise((resolve, reject) => {
            Dayphoto.findOneAndUpdate({_id}, {$set:{'badge':badge}})
                .then(resolve)
                .catch(reject)
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