const dayphotoData = new(require('./DayphotoData'))

class DayphotoLogic {
    create(idDog, nameDog, photo){
        return dayphotoData.create(idDog, nameDog, photo)
    }
    listAll(){
        return dayphotoData.listAll()
    }

}

module.exports = DayphotoLogic