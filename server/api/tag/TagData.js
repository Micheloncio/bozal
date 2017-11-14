const Tag = require('./TagSchema')

class TagData {
	create(name) {
        return new Promise((resolve, reject) => {
            if (!name)
                throw new Error(`tag name cannot be ${name}`)

            const tag = new Tag({ name })

            tag.save()
                .then(resolve)
                .catch(reject)
        })
    }

    retrieveByName(name) {
        return new Promise((resolve, reject) => {
            if (!name)
                throw new Error(`tag name cannot be ${name}`)

            Tag.findOne({name}, 'name -_id')
                .then(resolve)
                .catch(reject)
        })
    }

    listTags(){
        return Tag.find({}, 'name -_id').exec()
    }
}

module.exports = TagData