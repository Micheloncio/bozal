const dayphotoLogic = new(require('./dayphoto/dayphotoLogic'))

const deliverBadges = function(){
	const dateNow = new Date()
	const timeNow = dateNow.getHours()*60 + dateNow.getMinutes()
	const timeDay = 24*60
	const diff = timeDay - timeNow
	const timeToInitSetInterval = diff * 60 * 1000

	timeForSetInterval = 1000*60*60*24

	setTimeout(function(){
		dayphotoLogic.calculateBadges()
		setInterval(function(){
			dayphotoLogic.calculateBadges()
		},timeForSetInterval)
	},timeToInitSetInterval)
	
}



module.exports = deliverBadges