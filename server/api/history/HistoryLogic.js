const historyData = new(require('./HistoryData'))

class HistoryLogic {
	create(nameDog, photo, idDog, tag){
		return historyData.create(nameDog, photo, idDog, tag)
	}
	listLast24Hours() {
        return historyData.listLastGivenHours(24)
    }
    listLast24HoursByTag(tag){
    	return historyData.listLast24HoursByTag(tag)
    }
}

module.exports = HistoryLogic