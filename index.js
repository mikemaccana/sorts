var log = console.log.bind(console);

var prototypeOf = function(object){
	return Object.prototype.toString.call(object).split(' ')[1].slice(0, 6)
}

var sorts = {
	byLength: function (a, b) {
		return a.length - b.length
	},

	byNumber: function(a,b) {
		return a - b;
	},

	alphabetical: function(a,b){
		if ( prototypeOf(a) !== 'String' ) {
			log('Warning:', a, 'is not a string')
			return false;
		}
		return a.localeCompare(b);
	}
}


var byKey = function(property, sortName){
	return function(a,b) {
		var sortFunction = sorts[sortName]
		if ( ! sortFunction ) {
			sortFunction = sorts.alphabetical
		}
		return sortFunction(a[property], b[property])
	}
}

module.exports = {
	byLength: sorts.byLength,
	byNumber: sorts.byNumber,
	alphabetical: sorts.alphabetical,

	// Aliases
	numeric: sorts.byNumber,

	byKey: byKey
}
