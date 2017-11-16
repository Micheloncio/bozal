const History = require('./HistorySchema')
const Dog = require('../dog/DogSchema')

class HistoryData {
	create(nameDog, photo, idDog, _tag) {
        return new Promise((resolve, reject) => {
            if (!nameDog)
                throw new Error('no dog name provided')

            if (!photo)
                throw new Error('no photo provided')

            if (!idDog)
                throw new Error('no idDog provided')

            if(!_tag)
            	throw new Error('no tag provided')

            const tag = _tag.toLowerCase()

            const history = new History({ nameDog, photo, idDog, tag })

            history.save()
                .then(resolve)
                .catch(reject)
        })
    }

    listLastGivenHours(hours) {
        const millis = hours * 60 * 60 * 1000

        return History.find({ date:{$gt: (Date.now() - millis) }})
    }

    listByTag(_tag) {
        return new Promise((resolve, reject) => {
            if(!_tag)
                    throw new Error('no tag provided')

            const tag = _tag.toLowerCase()

            History.find({tag})
                .then(histories=>{
                    Dog.populate(histories, {path: 'comments.dog', select:'name'})
                        .then(resolve)
                })
                .catch(reject)

        })
    }

    addComent(_id, comment, idDog){
        return new Promise((resolve, reject) => {
            if (!_id)
                throw new Error('no id provided')

            if (!comment)
                throw new Error('no comment provided')

            if (!idDog)
                throw new Error('no idDog provided')


            History.update(
                {_id}, 
                { $push: { comments: {comment, dog: idDog} } }
                )
                .then(resolve)
                .catch(reject)
        })
    }
    itsLiked(_id,idDog){
        return new Promise((resolve, reject) => {
            if (!_id)
                throw new Error('no _id provided')

            if (!idDog)
                throw new Error('no idDog provided')

            History.findOne({_id, likes: idDog},'likes')
                .then(resolve)
                .catch(reject)
        })
    }
    addLike(_id, idDog){
        return new Promise((resolve, reject) => {
            if (!_id)
                throw new Error('no id provided')

            if (!idDog)
                throw new Error('no idDog provided')

            History.update(
                {_id}, 
                { $push: { likes: idDog } }
                )
                .then(resolve)
                .catch(reject)
        })
    }
    itsDisliked(_id,idDog){
        return new Promise((resolve, reject) => {
            if (!_id)
                throw new Error('no _id provided')

            if (!idDog)
                throw new Error('no idDog provided')

            History.findOne({_id, dislikes: idDog},'dislikes')
                .then(resolve)
                .catch(reject)
        })
    }
    addDislike(_id, idDog){
        return new Promise((resolve, reject) => {
            if (!_id)
                throw new Error('no id provided')

            if (!idDog)
                throw new Error('no idDog provided')

            History.update(
                {_id}, 
                { $push: { dislikes: idDog } }
                )
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = HistoryData