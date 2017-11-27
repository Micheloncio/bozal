const dayphotoData = new(require('./DayphotoData'))

class DayphotoLogic {
    create(idDog, nameDog, photo){
        return dayphotoData.create(idDog, nameDog, photo)
    }
    retrieveRandomDayphoto(){
        return dayphotoData.retrieveRandomDayphoto()
    }
    retrieveDifferentRandomDayphoto(_id){
        return dayphotoData.retrieveDifferentRandomDayphoto(_id)
    }
    addLike(_id){
        return dayphotoData.addLike(_id)
    }

}

module.exports = DayphotoLogic