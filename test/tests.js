// Tests. Mocha TDD/assert style. See
// http://visionmedia.github.com/mocha/
// http://nodejs.org/docs/latest/api/assert.html

var sorts = require('../index.js')

var assert = require('assert')

var log = console.log.bind(console)

suite('Correctly sorts', function(){

	test('alphabetical', function(){
		var fruits = ['pineapple', 'mango', 'coconut']
		fruits.sort(sorts.alphabetical)
		var expected = [ 'coconut', 'mango', 'pineapple' ]
		assert.deepEqual(fruits, expected)
	});

	test('length', function(){
		var fruits = ['pineapple', 'mango', 'coconut']
		fruits.sort(sorts.byLength)
		var expected = ['mango', 'coconut', 'pineapple']
		assert.deepEqual(fruits, expected)
	});

	test('numeric', function(){
		var ages = [21, 8, 20]
		ages.sort(sorts.numeric)
		var expected = [8, 20, 21]
		assert.deepEqual(ages, expected)
	});

	test('numeric', function(){
		var customers = [{
			name: 'Joe',
			age: 35,
		}, {
			name: 'Alex',
			age: 28
		}]
		customers.sort(sorts.byKey('name', 'alphabetical'))
		var expected = [{
			name: 'Alex',
			age: 28
		}, {
			name: 'Joe',
			age: 35,
		}]
		assert.deepEqual(customers, expected)
	});

	test('domainNames', function(){
		var domainNames = [
			'banana.com',
			'www.banana.com',
			'peach.com',
			'pear.com',
			'www.pear.com',
			'www.bananameltdown.com',
			'bananameltdown.com',
			'www.peach.com',
			'yolo.swag.banana.com',
			'swag.banana.com'
		]
		domainNames.sort(sorts.domainName)
		var expected = [
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
		assert.deepEqual(domainNames, expected)
	})

})
