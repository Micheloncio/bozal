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
}

module.exports = HistoryLogic