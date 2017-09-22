var log = console.log.bind(console);

var prototypeOf = function(object){
	return Object.prototype.toString.call(object).split(' ')[1].slice(0, 6)
}

var normalizeWww = function(domainName){
	return domainName.split('www.').reverse()[0]
}

var reverseDomainName = function(domainName){
	return domainName.split('.').reverse().join('.')
}

// These are inside a var as other sorts use them!
var sorts = {
	byLength: function (a, b) {
		return a.length - b.length
	},

	byNumber: function(a,b) {
		return a - b;
	},

	alphabetical: function(a,b){
		if ( prototypeOf(a) !== 'String' || prototypeOf(b) !== 'String' ) {
			log('Warning:', a, 'is not a string')
			return false;
		}
		return a.localeCompare(b);
	},

	domainName: function(a,b){
		if ( prototypeOf(a) !== 'String' || prototypeOf(b) !== 'String' ) {
			log('Warning:', a, 'is not a string')
			return false;
		}
		var aWasWww = a.startsWith('www.');
		var bWasWww = b.startsWith('www.');
		a = normalizeWww(a);
		b = normalizeWww(b);
		// Eg, we are comparing www.foo.com to foo.com
		if ( a === b && aWasWww !== bWasWww) {
			return aWasWww ? 1 : -1;
		}

		// Let's reverse the domain names
		a = reverseDomainName(a)
		b = reverseDomainName(b)
		return a.localeCompare(b);
	}
}

var alphabetical = function(a,b){
	if ( prototypeOf(a) !== 'String' ) {
		log('Warning:', a, 'is not a string')
		return false;
	}
	return a.localeCompare(b);
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
	byKey,
	domainName: sorts.domainName,
	alphabetical: sorts.alphabetical,

	// Aliases
	numeric: sorts.byNumber
}
