const historyData = new(require('./HistoryData'))

class HistoryLogic {
	create(nameDog, photo, idDog, _tag, description){
        const tag = _tag.toLowerCase()
		return historyData.create(nameDog, photo, idDog, tag, description)
	}
	listLast24Hours() {
        return historyData.listLastGivenHours(24)
    }
    listByTag(_tag){
        const tag = _tag.toLowerCase()
    	return historyData.listByTag(tag)
    }
    listByIdDog(idDog){
        return historyData.listByIdDog(idDog)
    }
	addComent(idHistory, comment, idDog){
		return historyData.addComent(idHistory, comment, idDog)
    }

    addLikeIfNotIt(_id,idDog) {
        return new Promise((resolve, reject) => {        
            historyData.itsLiked(_id,idDog)
                .then(like => {
                    if (like) {
                        resolve(true)
                    } else {
                        return historyData.addLike(_id, idDog)
                            .then(() => resolve(true))
                    }
                })
                .catch(reject)
        })
    }
    addDislikeIfNotIt(_id,idDog) {
        return new Promise((resolve, reject) => {        
            historyData.itsDisliked(_id,idDog)
                .then(like => {
                    if (like) {
                        resolve(true)
                    } else {
                        return historyData.addDislike(_id, idDog)
                            .then(() => resolve(true))
                    }
                })
                .catch(reject)
        })
    }

    deleteLike(_id, idDog){
    	return historyData.deleteLike(_id, idDog)
    }
    deleteDislike(_id, idDog){
    	return historyData.deleteDislike(_id, idDog)
    }

}

module.exports = HistoryLogic