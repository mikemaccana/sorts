# Common functions for array.sort()

Tired of staring at the same array.sort() (also known as [Array.prototype.sort()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort) ) functions over and over again? Use the `sorts` module!

## Using the module

var sorts = require('sorts')

## alphabetical

Sorts by alphabetical order, case insensitive, handles unicode.

Given:

	var fruits = ['pineapple', 'mango', 'coconut']

Just:

	fruits.sort(sorts.alphabetical)


## byLength

Given:

	var fruits = ['pineapple', 'mango', 'coconut']

Just:

	fruits.sort(sorts.byLength)

## byNumber(keyName)
## numeric(keyName)

	var ages = [21, 8, 20]

Just:

	ages.sort(sorts.numeric)

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

# Please add more sorts!
