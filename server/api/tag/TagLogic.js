const tagData = new(require('./TagData'))

class TagLogic {
    createIfNotExistTag(name) {
        return new Promise((resolve, reject) => {        
            tagData.retrieveByName(name.toLowerCase())
                .then(tag => {
                    if (tag) {
                        resolve(true)
                    } else {
                        return tagData.create(tag)
                            .then(() => resolve(true))
                    }
                })
                .catch(reject)
        })
    }
}