'use strict';
import * as utils from '../js-utils/arrays_objects';

test('checks if 2 arrays contain common elements', () => {
	let array1 = ['cats', 'dogs'],
			array2 = ['cows', 'cats'],
			array3 = ['aligators', 'polar bears'];
	expect(utils.arrayContains(array1, array2)).toBe(true);
	expect(utils.arrayContains(array2, array3)).toBe(false);
});

it('returns an array of the property values in an object', () => {
	let object = {name: 'Fluffykins', species: 'cat'},
			endArray = ['Fluffykins', 'cat'];
	expect(utils.mapValuesToArray(object)).toEqual(endArray);
});

it('returns an array of the key value pairs in an object', () => {
	let object = {name: 'Fluffykins', species: 'cat'},
			endArray = [['name', 'Fluffykins'], ['species', 'cat']];
	expect(utils.mapPairsToArray(object)).toEqual(endArray);
});