/**
 * Provides a common interface for session and local storage
 * 
 * Usage:
 *		Xtorage.local.setObject('something', { data: 'Hello, World!' })
 *		const something = Xtorage.local.getObject('something')
 *		console.log(something.message)
 */
class Xtorage {
	constructor(storage) {
		this.storage = storage
	}

	get(key) {
		return this.storage.getItem(key)
	}

	set(key, value) {
		this.storage.setItem(key, value)
	}

	getObject(key) {
		return JSON.parse(this.get(key))
	}

	setObject(key, obj) {
		this.set(key, JSON.stringify(obj))
	}

	clear() {
		this.storage.clear()
	}
	
	static session = new Xtorage(sessionStorage)
}
//module.exports = Xtorage
export default Xtorage

