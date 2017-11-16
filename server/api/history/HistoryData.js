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
                .then(dogs=>{
                    Dog.populate(dogs, {path: "comments.dog"})
                        .then(resolve)
                })
                .catch(reject)

        })
    }

    listTags(){
        return History.find({}, 'tag -_id')
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
}

module.exports = HistoryData