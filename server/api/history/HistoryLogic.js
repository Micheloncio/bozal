const historyData = new(require('./HistoryData'))

class HistoryLogic {
	create(nameDog, photo, idDog, tag){
		return historyData.create(nameDog, photo, idDog, tag)
	}
	listLast24Hours() {
        return historyData.listLastGivenHours(24)
    }
    listByTag(tag){
    	return historyData.listByTag(tag)
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