var sorts = {
	byLength: function (a, b) {
		return a.length - b.length
	},

	byNumber: function(a,b) {
		return a - b;
	},

	alphabetical: function(a,b){
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
