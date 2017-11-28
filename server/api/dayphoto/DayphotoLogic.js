const dayphotoData = new(require('./DayphotoData'))

class DayphotoLogic {
    create(idDog, nameDog, photo){
        return dayphotoData.create(idDog, nameDog, photo)
    }
    listAllByDogId(idDog){
        return dayphotoData.listAllByDogId(idDog)
    }
    retrieveRandomDayphoto(){
        return dayphotoData.countAll()
            .then(count =>{
                const random = Math.floor(Math.random()*count)
                return dayphotoData.retrieveRandomDayphoto(random)
            })
    }
    retrieveDifferentRandomDayphoto(_id){
        return dayphotoData.countAll()
            .then(count =>{
                const random = Math.floor(Math.random()*(count-1))
                return dayphotoData.retrieveDifferentRandomDayphoto(_id,random)
            })
    }
    addLike(_id){
        return dayphotoData.addLike(_id)
    }
    calculateBadges(){
        dayphotoData.countAll()
            .then(count =>{
                dayphotoData.listAllSortByLikes()
                    .then(dayPhotos =>{
                        const goldBadge = Math.floor(count*0.1)
                        const silverBadge = Math.floor(count*0.15)
                        const bronzeBadge = Math.floor(count*0.25)
                        for(let i=0; i<dayPhotos.length;i++){
                            if(i<goldBadge)
                                dayphotoData.updateBadge(dayPhotos[i]._id,'gold')
                            else if(i<goldBadge + silverBadge)
                                dayphotoData.updateBadge(dayPhotos[i]._id,'silver')
                            else if(i< goldBadge + silverBadge + bronzeBadge)
                                dayphotoData.updateBadge(dayPhotos[i]._id,'bronze')
                            else
                                dayphotoData.updateBadge(dayPhotos[i]._id,'none')
                        }
                    })
            })
    }

}

module.exports = DayphotoLogic