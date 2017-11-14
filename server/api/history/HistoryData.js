const History = require('./HistorySchema')

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

    listLast24HoursByTag(_tag) {
         if(!_tag)
                throw new Error('no tag provided')

        const tag = _tag.toLowerCase()

        const _24hoursInMiliseconds = 86400000

        return History.find({ date:{$gt: (Date.now() - _24hoursInMiliseconds)},
                              tag
                            })
    }

    listTags(){
        return History.find({}, 'tag -_id')
    }
}

module.exports = HistoryData