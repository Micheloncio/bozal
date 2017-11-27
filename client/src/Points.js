const Points = {
	checkHasPoints: function(points, necessaryPoints){
		if((points + necessaryPoints)>=0)
			return true

		return false
	},
	seeImage: 1,
	like: 3,
	comment: -3,
	addHistory: -20,
	dislike: -10,
	addDayPhoto: -100,
	voteDayPhoto: 2
}

export default Points