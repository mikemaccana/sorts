# Common functions for array.sort(), to keep your code neat and tidy

Tired of staring at the same array.sort() (also known as [Array.prototype.sort()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort) ) functions over and over again?

Worried about stuff like Unicode comparisons?

Need to sort an array of objects by some nested key, using a particular sort function?

Want to do cool stuff like compare domain names, ordering subdomains beneath their parents?

Use the `sorts` module!

## Using the module

	var sorts = require('sorts')

## alphabetical

Sorts by alphabetical order, case insensitive, handles unicode.

Given:

	var fruits = ['pineapple', 'mango', 'coconut']

Just:

	fruits.sort(sorts.alphabetical)

Returns:

	['coconut', 'mango', 'pineapple']

## byLength

Given:

	var fruits = ['pineapple', 'mango', 'coconut']

Returns:

	['mango', 'coconut', 'pineapple']


Just:

	fruits.sort(sorts.byLength)

## byNumber(keyName)
## numeric(keyName)

	var ages = [21, 8, 20]

Just:

	ages.sort(sorts.numeric)

Returns:

	[8, 20, 21]

## domainName

Sort alphabetically, but order subdomains beneath their parents, and include 'www.' immediately after the regular domain name. Eg:

	var domainNames = [
		'banana.com',
		'www.banana.com',
		'peach.com',
		'yolo.swag.banana.com',
		'pear.com',
		'www.pear.com',
		'www.bananameltdown.com',
		'swag.banana.com',
		'bananameltdown.com',
		'www.peach.com'
	]
	domainNames.sort(sorts.domainName)

Returns:

	[
		'banana.com',
		'www.banana.com',
		'swag.banana.com',
		'yolo.swag.banana.com',
		'bananameltdown.com',
		'www.bananameltdown.com',
		'peach.com',
		'www.peach.com',
		'pear.com',
		'www.pear.com'
	]

## byKey(keyName, sortFunction)

Sort an array of objects by a specified key. `sortFunction` can be any of the sort functions above - `alphabetical` is the default `sortFunction`.

	var customers = [{
		name: 'Joe',
		age: 35,
	}, {
		name: 'Alex',
		age: 28
	}]

Just:

	customers.sort(sorts.byKey('name', 'alphabetical'))

Returns:

	[{
		name: 'Alex',
		age: 28
	},{
		name: 'Joe',
		age: 35,
	}]

# Please add more sorts!
