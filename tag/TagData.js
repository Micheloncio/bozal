const Tag = require('./TagSchema')

class TagData {
	create(_name) {
        return new Promise((resolve, reject) => {

            if(!_name)
            	throw new Error('no tag provided')

            const name = _name.toLowerCase()

            const tag = new Tag({ name })

            tag.save()
                .then(resolve)
                .catch(reject)
        })
    }

    existTagByName(_name){
    	return new Promise((resolve, reject) => {
	    	if(!_name)
	            	throw new Error('no tag provided')

	    	const name = _name.toLowerCase()

	        Tag.findOne({name}, 'name -_id')
	        	.then(tag =>{
	        		if(tag){
	        			resolve(true)
	        		}else{
	        			resolve(false)
	        		}
	        	})
	        	.catch(reject)
    	})
    }

    listTags(){
        return Tag.find({}, 'name -_id')
    }
}

module.exports = TagData