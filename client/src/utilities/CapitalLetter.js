const CapitalLetter = function(word){
	return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}

export default CapitalLetter